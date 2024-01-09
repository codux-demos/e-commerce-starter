import classNames from 'classnames';
import styles from './accordion.module.scss';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as RadixAccordion from '@radix-ui/react-accordion';
import React, { useState, ReactNode, PropsWithChildren } from 'react';

export interface AccordionProps {
    className?: string;
    items: { title: string; description: string }[];
}

export const Accordion = ({ className, items }: AccordionProps) => {
    const [openItem, setOpenItem] = useState(items.at(0)?.title);
    return (
        <div className={classNames(styles.root, className)}>
            <RadixAccordion.Root
                type="single"
                defaultValue={items[0]?.title}
                collapsible
                onValueChange={(val) => setOpenItem(val)}
            >
                {items.map(({ title, description }, i) => {
                    return (
                        <RadixAccordion.Item
                            value={title}
                            key={title}
                            className={i < items.length - 1 ? styles.accordionItem : ''}
                        >
                            <AccordionTrigger isOpen={title === openItem}>{title}</AccordionTrigger>
                            <AccordionContent className={styles.content}>
                                {description}
                            </AccordionContent>
                        </RadixAccordion.Item>
                    );
                })}
            </RadixAccordion.Root>
        </div>
    );
};

type AccordionTriggerProps = {
    className?: string;
    isOpen: boolean;
};
export type AccordionTriggerRef = HTMLButtonElement;

const AccordionTrigger = React.forwardRef<
    AccordionTriggerRef,
    PropsWithChildren<AccordionTriggerProps>
>(({ children, className, isOpen, ...props }, forwardedRef) => (
    <RadixAccordion.Header className={styles.headr}>
        <RadixAccordion.Trigger
            className={classNames(className, styles.trigger)}
            {...props}
            ref={forwardedRef}
        >
            <div className={styles.innerHeader}>
                {children}
                <div>{isOpen ? '-' : '+'}</div>
            </div>
        </RadixAccordion.Trigger>
    </RadixAccordion.Header>
));

type AccordionContentProps = {
    className?: string;
};
export type AccordionContentRef = HTMLDivElement;

const AccordionContent = React.forwardRef<
    AccordionContentRef,
    PropsWithChildren<AccordionContentProps>
>(({ children, className, ...props }, forwardedRef) => (
    <RadixAccordion.Content className={classNames(className)} {...props} ref={forwardedRef}>
        <div>{children}</div>
    </RadixAccordion.Content>
));
