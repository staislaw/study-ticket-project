import TicketRegistration from "@/app/components/TicketRegistration";

export function generateStaticParams() {
  const pages = [
    { 'routeNumber': '34' },
    { 'routeNumber': '35' },
    { 'routeNumber': '36' },
    { 'routeNumber': '37' },
    { 'routeNumber': '38' },
    { 'routeNumber': '39' }];
  return pages;
}

export default function TicketRegistrationWrap({ params }) {
  return <TicketRegistration params={params} />
}