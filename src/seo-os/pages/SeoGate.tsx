import { useEffect, useState, type FormEvent } from "react"
import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router"

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { seoLogin } from "@/seo-os/auth"

const PHOTO = "/images/seo-gate.png"

export default function SeoGate({ onUnlocked }: { onUnlocked: () => void }) {
  const { pathname } = useLocation()
  const [stage, setStage] = useState<"land" | "login">(pathname.endsWith("/login") ? "login" : "land")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  useEffect(() => {
    if (stage !== "land") return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Enter") setStage("login")
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [stage])

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
    <div className="seo-os flex min-h-svh flex-col bg-black text-white">
      <Helmet>
        <title>Stay away · myCHEF SEO</title>
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </Helmet>

      <div className="flex flex-1 items-center justify-center px-4 pt-6">
        <img
          src={PHOTO}
          alt="A chef holding a small dog. Both wear whites and sunglasses."
          width={952}
          height={776}
          className={
            stage === "login"
              ? "max-h-[min(40svh,420px)] w-auto max-w-[min(92vw,560px)] object-contain"
              : "max-h-[min(58svh,640px)] w-auto max-w-[min(92vw,720px)] object-contain"
          }
        />
      </div>

      <div className="relative z-20 px-5 pb-8 sm:px-10 sm:pb-12">
        <h1 className="seo-gate-title max-w-[18ch] text-[clamp(2.75rem,8.5vw,6.75rem)] leading-[0.88] font-medium tracking-[-0.03em] text-white">
          Stay away.
          <span className="mt-[0.08em] block">The dog is dangerous.</span>
        </h1>

        {stage === "land" ? (
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="mt-8 h-12 w-fit border-white/80 bg-black/40 px-8 text-white hover:bg-white hover:text-black"
            onClick={() => setStage("login")}
          >
            Continue
          </Button>
        ) : (
          <form onSubmit={submit} className="mt-5 max-w-sm">
            <FieldGroup className="gap-3">
              <Field data-invalid={error ? true : undefined}>
                <FieldLabel htmlFor="seo-password" className="text-white">
                  Password
                </FieldLabel>
                <Input
                  id="seo-password"
                  type="password"
                  autoComplete="current-password"
                  autoFocus
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  aria-invalid={error ? true : undefined}
                  className="h-12 border-white/70 bg-black/50 text-white md:text-base"
                />
              </Field>
              {error ? (
                <p className="text-sm text-red-300" role="alert">
                  {error}
                </p>
              ) : null}
              <Button
                type="submit"
                size="lg"
                disabled={pending || !password}
                className="h-12 border border-white bg-white text-black hover:bg-white/90"
              >
                {pending ? "Checking…" : "Enter"}
              </Button>
            </FieldGroup>
          </form>
        )}
      </div>
    </div>
  )
}
