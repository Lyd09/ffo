
import MainLayout from '../MainLayout';

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
