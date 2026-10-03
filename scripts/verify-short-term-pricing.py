#!/usr/bin/env python3
"""Verify the published visit/meal-pack contract in prerendered customer pages."""
from pathlib import Path
from html.parser import HTMLParser
import json,re,sys
ROOT=Path(__file__).resolve().parents[1]
class Page(HTMLParser):
    def __init__(self):super().__init__();self.skip=0;self.main=False;self.text=[];self.ld=False;self.scripts=[];self.script=[]
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if tag=='main':self.main=True
        if tag in ('script','style'):self.skip+=1
        if tag=='script' and attrs.get('type')=='application/ld+json':self.ld=True;self.script=[]
    def handle_endtag(self,tag):
        if tag=='main':self.main=False
        if tag in ('script','style'):self.skip=max(0,self.skip-1)
        if tag=='script' and self.ld:self.scripts.append(json.loads(''.join(self.script)));self.ld=False
    def handle_data(self,data):
        if self.main and not self.skip:self.text.append(data)
        if self.ld:self.script.append(data)
def walk(value):
    if isinstance(value,dict):
        yield value
        for child in value.values():yield from walk(child)
    elif isinstance(value,list):
        for child in value:yield from walk(child)

fail=[];pages={}
for f in (ROOT/'dist').rglob('index.html'):
    route='/'+str(f.parent.relative_to(ROOT/'dist'));route='/' if route=='/.' else route
    page=Page();page.feed(f.read_text());pages[route]=page
    text=' '.join(' '.join(page.text).split())
    for pattern in [r'\bFresh Meal\b',r'\bPrivate Chef Food Prep\b',r'\bKitchen on Autopilot\b',r'minimum three chef days',r'at least three chef days',r'3–29 chef days',r'12% frequency reduction',r'nine-hour (?:full-day|shift)',r'AED 1,320',r'AED 26,400',r'AED 18,500']:
        if re.search(pattern,text):fail.append(f'{route}: retired visit wording: {pattern}')
core=['/private-chef-dubai/pricing','/private-chef-dubai/short-term-chef','/weekly-meal-prep-dubai','/part-time-private-chef-dubai','/private-chef-dubai']
for route in core:
    page=pages.get(route)
    if not page:fail.append(f'{route}: missing build');continue
    text=' '.join(' '.join(page.text).split())
    for required in ['member','prepaid','5% VAT','no markup','40–130']:
        if required.lower() not in text.lower():fail.append(f'{route}: missing {required}')
for route in core[:2]:
    page=pages.get(route)
    if not page:continue
    text=' '.join(' '.join(page.text).split())
    for price in ['1,125','750','1,350','900','1,575','1,050','2,000','1,450']:
        if f'AED {price}' not in text:fail.append(f'{route}: visible price missing: {price}')
    catalogs=[node for node in walk(page.scripts) if node.get('@type')=='OfferCatalog' and node.get('name')=='Signature private chef rates']
    if len(catalogs)!=1:fail.append(f'{route}: expected one visit OfferCatalog');continue
    expected=[1125,750,1350,900,1575,1050,2000,1450]+([60,45,80,60,125,95] if route==core[0] else [])
    offers=catalogs[0]['itemListElement']
    if [offer['price'] for offer in offers]!=expected:fail.append(f'{route}: schema price mismatch')
    for offer in offers:
        if offer['priceSpecification']['price']!=offer['price'] or offer['priceSpecification']['valueAddedTaxIncluded'] is not False:fail.append(f'{route}: invalid price specification')
for route in [core[0],core[2]]:
    if route not in pages:continue
    text=' '.join(' '.join(pages[route].text).split())
    for term in ['15, 30 or 45','AED 1,750','AED 2,325','20–25','do not charge both']:
        if term not in text:fail.append(f'{route}: missing meal-pack explanation: {term}')
if fail:print('\n'.join(fail));sys.exit(1)
print(f'Short-term pricing OK: {len(pages)} rendered pages swept; single/member rates, eligibility, extras, meal packs and matching schema verified.')
