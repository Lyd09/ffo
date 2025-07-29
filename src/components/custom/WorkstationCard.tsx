
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { LucideProps } from 'lucide-react';

interface Spec {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  label: string;
  value: string;
}

interface WorkstationCardProps {
  title: string;
  description: string;
  specs: Spec[];
  imageUrl?: string;
  dataAiHint?: string;
}

export default function WorkstationCard({ title, description, specs, imageUrl, dataAiHint }: WorkstationCardProps) {
  return (
    <Card className="w-full max-w-lg bg-secondary/30 border-border shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {imageUrl && (
          <div className="mb-6 relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              data-ai-hint={dataAiHint}
            />
          </div>
        )}
        <ul className="space-y-3">
          {specs.map((spec, index) => (
            <React.Fragment key={index}>
              <li className="flex items-center gap-4 text-sm">
                <spec.icon className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-semibold text-muted-foreground w-2/5">{spec.label}</span>
                <span className="text-foreground text-right w-3/5">{spec.value}</span>
              </li>
              {index < specs.length - 1 && <hr className="border-border/50" />}
            </React.Fragment>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
