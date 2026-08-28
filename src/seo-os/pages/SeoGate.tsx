import { useState, type FormEvent } from "react"
import { Helmet } from "react-helmet-async"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { seoLogin } from "@/seo-os/auth"

const PHOTO = "/images/seo-gate.png"

export default function SeoGate({ onUnlocked }: { onUnlocked: () => void }) {
  const [meditation, setMeditation] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault()
    if (!password || pending) return
    setPending(true)
    setError(null)
    const result = await seoLogin(password)
    setPending(false)
    if (result.ok) onUnlocked()
    else setError(result.error ?? "Wrong password.")
  }

  return (
    <div className="seo-os flex min-h-svh items-center justify-center bg-background px-6 py-16 md:py-20">
      <Helmet>
        <title>Stay away · myCHEF SEO</title>
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </Helmet>

      <Card className="w-full max-w-sm gap-6 rounded-xl border-border py-8 duration-300 animate-in fade-in-0">
        <CardHeader className="items-center justify-items-center text-center">
          <figure className="overflow-hidden rounded-md border border-border bg-black">
            <img
              src={PHOTO}
              alt="A chef holding a small dog. Both wear whites and sunglasses."
              width={563}
              height={753}
              className="mx-auto block h-auto w-32 object-contain object-center sm:w-36"
            />
          </figure>
          <CardTitle className="seo-gate-title mt-2 text-2xl font-medium tracking-[-0.03em] sm:text-[1.75rem]">
            <h1>
              Stay away.
              <span className="mt-[0.06em] block">The dog is dangerous.</span>
            </h1>
          </CardTitle>
          <CardDescription>Sign in to the SEO board.</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={submit}>
            <FieldGroup className="gap-4">
              <Field data-invalid={error ? true : undefined}>
                <FieldLabel htmlFor="seo-password">Password</FieldLabel>
                <Input
                  id="seo-password"
                  type="password"
                  autoComplete="current-password"
                  autoFocus
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  aria-invalid={error ? true : undefined}
                  className="h-11"
                />
                {error ? <FieldError>{error}</FieldError> : null}
              </Field>
              <Button type="submit" className="h-11 w-full" disabled={pending}>
                {pending ? <Spinner data-icon="inline-start" /> : null}
                {pending ? "Checking…" : "Login"}
              </Button>
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter className="flex-col">
          <Button
            type="button"
            variant="outline"
            className="h-11 w-full"
            onClick={() => setMeditation(true)}
          >
            do meditation
          </Button>
        </CardFooter>
      </Card>

      <AlertDialog open={meditation} onOpenChange={setMeditation}>
        <AlertDialogContent
          overlayClassName="bg-black/80"
          className="top-0 left-0 flex h-svh w-screen max-w-none translate-x-0 translate-y-0 items-center justify-center border-0 bg-transparent p-6 shadow-none sm:max-w-none"
        >
          <div className="w-full max-w-sm rounded-xl border border-border bg-card p-6 text-center text-card-foreground shadow-lg">
            <AlertDialogHeader className="text-center sm:text-center">
              <AlertDialogTitle className="seo-gate-title text-xl leading-snug font-medium">
                Du fatter det jo ikke. Det handler om at sidde stille og ikke gøre noget.
              </AlertDialogTitle>
              <AlertDialogDescription>Vil du prøve igen?</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-4 sm:justify-center">
              <AlertDialogAction className="h-11" onClick={() => setMeditation(false)}>
                Prøv igen
              </AlertDialogAction>
            </AlertDialogFooter>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
