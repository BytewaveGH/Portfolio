import TopNav from '@/components/generals/layouts/top-nav';
import ParticlesTemplate from '@/components/generals/particles';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <nav className='w-full sticky left-0 top-0 z-50 bg-white'>
                        <TopNav />
                    </nav>
                    <ParticlesTemplate />

                    {children}
                    
                </NextIntlClientProvider>
            </body>
        </html>
    );
}