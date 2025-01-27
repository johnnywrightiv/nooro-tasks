import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function CreateTaskButton() {
  return (
    <Link href="/tasks/new">
      <Button className="mb-6 w-full font-bold">
        Create Task
        <PlusCircle className="h-5 w-5" />
      </Button>
    </Link>
  )
}

