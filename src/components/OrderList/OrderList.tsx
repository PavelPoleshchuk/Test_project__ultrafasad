import React, { forwardRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./styles.css";

type AccordionItem = {
  value: string;
  trigger: string;
  content: string;
};

const dataAccordion: AccordionItem[] = [
  {
    value: "item-1",
    trigger: "Выбор товара",
    content:
      "Выберите мебель, которую хотите заказать. Обычно это делается на сайте интернет-магазина или в физическом магазине.",
  },
  {
    value: "item-2",
    trigger: "Консультация с продавцом",
    content:
      "Если у вас есть вопросы или вам нужна помощь с выбором, обратитесь к продавцу или специалисту по мебели для получения консультации.",
  },
  {
    value: "item-3",
    trigger: "Определение деталей заказа",
    content:
      "Уточните все детали вашего заказа, такие как размеры, цвет, материал и другие спецификации. Убедитесь, что все ваши предпочтения правильно записаны.",
  },
  {
    value: "item-4",
    trigger: "Консультация с продавцом",
    content:
      "Если у вас есть вопросы или вам нужна помощь с выбором, обратитесь к продавцу или специалисту по мебели для получения консультации.",
  },
  {
    value: "item-5",
    trigger: "Оплата",
    content:
      "Выберите удобный способ оплаты и оплатите свой заказ. Обычно вам будет предложено выбрать между различными способами оплаты, такими как кредитная карта, банковский перевод или наличные.",
  },
  {
    value: "item-6",
    trigger: "Ожидание доставки",
    content:
      "После подтверждения заказа и оплаты вам нужно будет подождать, пока ваша мебель не будет изготовлена (если это заказ на изготовление) или доставлена из магазина (если это готовая мебель).",
  },
  {
    value: "item-7",
    trigger: "Получение мебели",
    content:
      " Когда ваша мебель будет готова к доставке, вам предоставят дату и время доставки. Убедитесь, что вы или кто-то другой будет дома для приема заказа.",
  },
  {
    value: "item-8",
    trigger: "Проверка и установка",
    content:
      "После получения мебели убедитесь, что она соответствует вашему заказу и не повреждена. При необходимости выполните установку или сборку мебели согласно инструкциям или обратитесь за помощью к специалистам.",
  },
  {
    value: "item-9",
    trigger: "Обратная связь",
    content:
      "После получения заказа не забудьте оставить обратную связь о качестве товара и обслуживания магазина. Это поможет другим покупателям и компании улучшить свои услуги.",
  },
];

const OrderList: React.FC = () => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {dataAccordion.map(({ value, trigger, content }) => (
      <Accordion.Item className="AccordionItem" value={value}>
        <AccordionTrigger>{trigger}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<{ className?: string }>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames("AccordionTrigger", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{ className?: string }>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames("AccordionContent", className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));

export default OrderList;
