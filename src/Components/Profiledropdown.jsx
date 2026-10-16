"use client";
import { signOut } from "@/lib/auth-client";
import { Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";

export function Profiledropdown() {
  const OnHandleSignOut = async() =>{
    signOut()
  }
  return (
    <Dropdown>
      <Button
        aria-label="Menu"
        variant="secondary"
        className="font-semibold text-black"
      >
        Profile
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="edit-file" textValue="Edit file">
           <Link href='/Profile'> <Label>👤 আমার প্রোফাইল</Label> </Link>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <button onClick={OnHandleSignOut}>↩ সাইন আউট</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
