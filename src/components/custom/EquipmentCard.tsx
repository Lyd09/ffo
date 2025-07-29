
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { LucideProps } from 'lucide-react';
import React from 'react';

interface EquipmentCardProps {
  category: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  name: string;
  imageUrl: string;
  dataAiHint: string;
  description: string;
}

export default function EquipmentCard({ icon: Icon, name, imageUrl, dataAiHint, description }: EquipmentCardProps) {
  return (
    <Card className="overflow-hidden text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-primary/20 hover:shadow-lg bg-secondary/30 border-border">
      <CardHeader className="items-center pb-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-xl">
                <Icon className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl text-left">{name}</CardTitle>
          </div>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-square w-full mb-4">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-contain"
            data-ai-hint={dataAiHint}
          />
        </div>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
