
        import './globals.css';
        import Navbar from '../components/Navbar';
        export const metadata = { 
            title: "Chatbots Trends 2024-2025: Market Insights & Building Your Chatbot Website", 
            description: "Explore the latest trends in chatbots, the growth of AI chatbots, and how to build a chatbot site to stay ahead in 2024-2025." 
        };
        export default function RootLayout({ children }) {
            return (
                <html lang="en">
                    <body>
                        <Navbar />
                        {children}
                    </body>
                </html>
            );
        }
        