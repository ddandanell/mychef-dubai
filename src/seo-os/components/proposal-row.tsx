import { toast } from "sonner"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"
import { StatusPill } from "@/seo-os/components/status-pill"
import type { ControlProposal } from "@/seo-os/lib/control"

const READ_ONLY = "The board is a read surface. Accept/reject opens a PR locally — it does not mutate production."

export function ProposalRow({ item }: { item: ControlProposal }) {
  return (
    <Item variant="outline" size="sm">
      <ItemContent>
        <ItemTitle>
          <StatusPill value={item.type} />
          {item.risk ? <StatusPill value={item.risk} /> : null}
          <span className="font-mono text-xs">{item.url}</span>
        </ItemTitle>
        <ItemDescription>
          {item.keyword ? `${item.keyword} — ` : null}
          {item.reason}
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button
          size="sm"
          variant="outline"
          onClick={() => toast.info(READ_ONLY)}
        >
          Accept
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="sm" variant="ghost">
              Reject
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Reject {item.id}?</AlertDialogTitle>
              <AlertDialogDescription>{READ_ONLY}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep</AlertDialogCancel>
              <AlertDialogAction onClick={() => toast.message(`Logged reject for ${item.id} — not applied.`)}>
                Mark rejected
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ItemActions>
    </Item>
  )
}
