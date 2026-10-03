"""Curated expansion using the owner's existing dish rate ladder. Stable IDs are preserved.
Run only when rebuilding the initial catalogue; edit the JSON / owner workbook afterwards.
New recipes use indicative tariff prices, not measured recipe costs.
"""
import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
old = {d['id']: d for d in json.loads((root / 'src/content/privateDiningDishes.json').read_text())['dishes']}
# name | diet (v vegan, t vegetarian, o standard) | tier | ingredient band | original dish id
menus = {
 'indian': {
 'Starter': '''Chicken tikka|o|S|L|7
Vegetable samosas|v|E|L
Onion bhajis|v|E|L
Aloo tikki with tamarind|v|E|L
Tandoori broccoli with lemon|v|S|L
Paneer tikka|t|S|M
Dahi puri|t|S|L
Vegetable pakoras|v|E|L
Lentil shorba|v|E|L
Lamb seekh kebab|o|S|M''',
 'Main': '''Butter chicken|o|S|L|3
Lamb rogan josh|o|S|M|4
Hyderabadi dum biryani|o|C|M|1
Palak paneer|t|S|L|6
Chana masala|v|E|L|8
Vegetable jalfrezi|v|E|L
Rajma masala|v|E|L
Vegetable biryani (vegan recipe)|v|S|L
Masala dosa with sambar and chutney|v|C|L|0
Haleem|o|C|M|2''',
 'Side': '''Dal tadka (oil, no ghee)|v|E|L|9
Aloo gobi|v|E|L|10
Jeera rice|v|E|L|11
Naan / paratha|t|S|L|5
Steamed basmati rice|v|E|L
Cucumber raita|t|E|L
Kachumber salad|v|E|L
Bhindi masala|v|E|L
Lemon rice|v|E|L
Tandoori roti (no butter)|v|E|L''',
 'Dessert': '''Gulab jamun|t|S|L
Rasmalai|t|S|M
Cardamom rice kheer|t|E|L
Pistachio kulfi|t|S|M
Gajar halwa|t|S|L
Coconut rice payasam (vegan)|v|E|L
Mango sorbet|v|E|M
Cardamom fruit chaat|v|E|L
Coconut ladoo (vegan)|v|S|L
Saffron poached pear|v|S|M'''
 },
 'arabic': {
 'Starter': '''Hummus and moutabal mezze|v|E|L|33
Fattoush|v|E|L|34
Lentil soup|v|E|L|35
Kibbeh|o|C|M|23
Warak enab (rice and herbs)|v|C|L|24
Falafel with tahini|v|E|L
Tabbouleh|v|E|L
Cheese sambousek|t|S|L
Labneh with zaatar|t|E|L
Muhammara|v|S|M''',
 'Main': '''Shish tawook|o|E|L|31
Lamb kofta|o|E|M|32
Chicken machboos|o|S|M|28
Lamb ouzi|o|S|H|25
Lamb tagine|o|S|M|27
Chicken shawarma|o|E|M|30
Chickpea and vegetable tagine|v|S|L
Mujadara with caramelised onions|v|E|L
Stuffed courgettes (rice and herbs)|v|S|L
Lebanese aubergine and chickpea stew|v|E|L''',
 'Side': '''Vermicelli rice (olive oil)|v|E|L
Batata harra|v|E|L
Grilled vegetables with zaatar|v|E|L
Arabic chopped salad|v|E|L
Warm Arabic bread|v|E|L
Freekeh with herbs (vegetable stock)|v|S|L
Cucumber yoghurt salad|t|E|L
Roasted cauliflower with tahini|v|E|L
Pickled vegetable selection|v|E|L
Saffron rice|v|E|L''',
 'Dessert': '''Kunafa|t|S|M
Umm Ali|t|S|L
Muhallabia|t|E|L
Pistachio baklava|t|S|M
Date cake|t|S|L
Luqaimat (vegan recipe)|v|S|L
Rosewater fruit salad|v|E|L
Date and tahini bites|v|E|L
Orange blossom rice pudding (vegan)|v|S|L
Pomegranate sorbet|v|E|M'''
 },
 'western': {
 'Starter': '''Roasted tomato and basil soup|v|E|L
Beetroot and rocket salad|v|E|L
Mushroom bruschetta|v|E|L
Roasted pumpkin soup (vegan)|v|E|L
Goat cheese tart|t|S|M
Smoked salmon salad|o|S|H
Chicken liver parfait|o|S|M
Prawn cocktail|o|S|H
Potato croquettes|t|C|L
Gazpacho|v|E|L|67''',
 'Main': '''Chicken fricassee|o|S|L|55
Beef bourguignon|o|S|M|51
Roast chicken with herbs|o|E|M
Grilled salmon with lemon|o|S|H
Beef Wellington|o|C|H|47
Mushroom and lentil Wellington (vegan)|v|C|M
Roasted cauliflower steak|v|S|L
Vegetable shepherd’s pie|v|S|L
Stuffed peppers with quinoa|v|E|L
Spinach and ricotta tart|t|S|M''',
 'Side': '''Ratatouille|v|S|L|54
Gratin dauphinois|t|E|L|58
Olive oil mashed potatoes|v|E|L
Roast potatoes with rosemary|v|E|L
Green beans with almonds|v|E|L
Honey glazed carrots|t|E|L
Garden salad with vinaigrette|v|E|L
Garlic mushrooms|v|E|L
Steamed seasonal greens|v|E|L
Creamed spinach|t|S|L''',
 'Dessert': '''Crème brûlée|t|S|L|56
Chocolate fondant|t|C|M
Vanilla cheesecake|t|S|M
Apple crumble|t|E|L
Sticky toffee pudding|t|S|L
Dark chocolate mousse (vegan)|v|S|M
Berry crumble (vegan)|v|E|L
Lemon sorbet|v|E|L
Vanilla poached pear|v|E|L
Seasonal fruit platter|v|E|L'''
 },
 'japanese': {
 'Starter': '''Edamame with sea salt|v|E|L
Vegetable gyoza|v|S|L
Miso soup (kombu stock)|v|E|L
Cucumber sunomono|v|E|L
Vegetable tempura (vegan batter)|v|S|M
Chicken karaage|o|S|M
Prawn tempura|o|C|H
Wakame and sesame salad|v|S|M
Agedashi tofu (vegan broth)|v|S|L
Chicken yakitori|o|S|M''',
 'Main': '''Chicken teriyaki donburi|o|S|M
Salmon teriyaki|o|S|H
Chicken katsu curry|o|S|M
Beef yakiniku rice bowl|o|S|H
Miso aubergine with rice|v|S|L
Tofu teriyaki donburi|v|S|L
Vegetable yakisoba (vegan noodles)|v|S|L
Shiitake and tofu curry|v|S|M
Vegetable sushi rolls|v|C|M
Sushi: nigiri and maki|o|C|H|69''',
 'Side': '''Steamed Japanese rice|v|E|L
Sesame broccoli|v|E|L
Kabocha squash (kombu stock)|v|S|L
Pickled daikon and carrot|v|E|L
Spinach goma-ae|v|E|L
Shiitake fried rice (no egg)|v|S|M
Ginger cabbage slaw|v|E|L
Tamagoyaki|t|S|L
Garlic green beans|v|E|L
Sesame sweet potatoes|v|E|L''',
 'Dessert': '''Matcha cheesecake|t|S|M
Japanese cotton cheesecake|t|C|M
Dorayaki with red bean|t|S|L
Matcha tiramisu|t|S|M
Black sesame panna cotta (agar)|t|S|M
Yuzu sorbet|v|S|M
Fruit kanten jelly|v|E|L
Strawberry daifuku (vegan recipe)|v|C|M
Matcha coconut pudding|v|S|M
Anmitsu with fruit and agar jelly|v|S|L'''
 },
 'italian': {
 'Starter': '''Minestrone (vegetable stock)|v|E|L|45
Tomato bruschetta|v|E|L
Caprese salad|t|E|M
Roasted pepper antipasti|v|E|L
Artichoke and white bean salad|v|S|M
Mushroom arancini|t|S|M
Focaccia with olives|v|E|L
Beef carpaccio|o|C|H
Panzanella|v|E|L
Burrata with tomatoes|t|S|H''',
 'Main': '''Handmade spinach and ricotta ravioli|t|C|M|36
Beef lasagne|o|S|M|37
Mushroom risotto (vegan recipe)|v|S|M|39
Melanzane parmigiana|t|S|M|41
Chicken parmigiana|o|S|M|42
Spaghetti bolognese|o|E|M|43
Pasta pomodoro (egg-free pasta)|v|E|L|46
Penne arrabbiata|v|E|L
White bean and vegetable ragù|v|E|L
Seafood linguine|o|S|H''',
 'Side': '''Rosemary roast potatoes|v|E|L
Rocket and balsamic salad|v|E|L
Garlic green beans|v|E|L
Grilled seasonal vegetables|v|E|L
Caponata|v|S|L
Creamy polenta|t|E|L
Broccoli with lemon and chilli|v|E|L
Tomato and basil salad|v|E|L
Sautéed spinach with garlic|v|E|L
Cannellini beans with sage|v|E|L''',
 'Dessert': '''Tiramisu|t|E|M|44
Vanilla panna cotta (agar)|t|S|L
Cannoli|t|C|M
Lemon ricotta cake|t|S|M
Chocolate torta|t|S|M
Lemon granita|v|E|L
Strawberry sorbet|v|E|L
Espresso granita|v|E|L
Roasted peaches with almonds|v|S|L
Chocolate olive oil cake (vegan)|v|S|M'''
 }
}
dishes=[]
for cuisine,categories in menus.items():
 for course,rows in categories.items():
  for i,line in enumerate(rows.splitlines(),1):
   bits=line.split('|'); name,diet,tier,band=bits[:4]
   original=old.get(int(bits[4])) if len(bits)>4 else None
   dish={'id':f'{cuisine}-{course.lower()}-{i:02}', 'name':name, 'cuisine':cuisine, 'course':course,
         'diet':{'o':'standard','t':'vegetarian','v':'vegan'}[diet], 'tier':tier, 'groceryBand':band,
         'minChefLevel':original['minChefLevel'] if original else {'E':2,'S':3,'C':4}[tier],
         'quoteRequired':bool(original and (original['marketPrice'] or original['needsCostConfirmation'] or original['requiresSignoff'])),
         'active':True, 'sourceId':original['id'] if original else None,
         'priceBasis':'Existing guide tariff; recipe adaptation' if original else 'New menu suggestion; existing tariff estimate',
         'recipeNote': 'Prepare without meat, fish, dairy, eggs, honey or animal stock.' if diet=='v' else 'Use vegetarian cheese, stock and setting agents; no meat or fish.' if diet=='t' else 'Confirm recipe and allergens before booking.'}
   if original:
    dish['tier']=original['tier'];dish['groceryBand']=original['groceryBand']
   dishes.append(dish)
assert len(dishes)==200
(root / 'src/content/privateDiningMenu.json').write_text(json.dumps(dishes,ensure_ascii=False,indent=2)+'\n')
