import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginationProps {
    links: PaginationLink[];
}

export function Pagination({ links }: PaginationProps) {
    if (links.length === 3) return null; // Only one page

    return (
        <div className="flex items-center justify-end space-x-2 py-4">
            {links.map((link, key) => {
                const isPrevious = link.label.includes('Previous');
                const isNext = link.label.includes('Next');


                return (
                    <Button
                        key={key}
                        variant={link.active ? 'default' : 'outline'}
                        size="sm"
                        asChild
                        disabled={!link.url}
                    >
                        <Link
                            href={link.url || '#'}
                            preserveScroll
                            preserveState
                            className={!link.url ? 'pointer-events-none opacity-50' : ''}
                        >
                            {isPrevious ? (
                                <ChevronLeft className="h-4 w-4" />
                            ) : isNext ? (
                                <ChevronRight className="h-4 w-4" />
                            ) : (
                                <span dangerouslySetInnerHTML={{ __html: link.label }} />
                            )}
                        </Link>
                    </Button>
                );
            })}
        </div>
    );
}
