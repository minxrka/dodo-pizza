import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { User } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* left side */}
        <div className="flex items-center gap-4">
          <Image src="/dodo-logo.png" alt="logo" width={40} height={40} />
          <div className="flex gap-1 flex-col">
            <h1 className="text-2xl uppercase font-bold">додо пицца</h1>
            <p className="text-sm leading-3">Сеть №1 в России</p>
            <p className="text-xs leading-3 text-primary">
              по количеству пиццерий
            </p>
          </div>
        </div>
        {/* right side */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-1 flex">
            <User size="16px" />
            Войти
          </Button>
          <div></div>
        </div>
      </Container>
    </header>
  );
};
