'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { ColumnDef } from '@tanstack/react-table';

export interface ForwardedNotification {
    id: number;
    from: string;
    content: string;
    created_at: string;
}

export const columns: ColumnDef<ForwardedNotification>[] = [
    {
        accessorKey: 'from',
        header: 'From',
        cell: ({ row }) => (
            <div className="font-medium">{row.getValue('from')}</div>
        ),
    },
    {
        accessorKey: 'content',
        header: 'Message',
        cell: ({ row }) => (
            <div className="max-w-md truncate" title={row.getValue('content')}>
                {row.getValue('content')}
            </div>
        ),
    },
    {
        accessorKey: 'created_at',
        header: 'Received At',
        cell: ({ row }) => {
            return (
                <div>
                    {row.original.created_at
                        ? new Date(row.original.created_at).toLocaleString()
                        : '-'}
                </div>
            );
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const notification = row.original;

            return (
                <div className="text-right">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                                View
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Notification Details</DialogTitle>
                                <DialogDescription>
                                    From: {notification.from}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="space-y-2">
                                    <h4 className="font-medium leading-none">
                                        Message Content
                                    </h4>
                                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                                        {notification.content}
                                    </p>
                                </div>
                                {notification.created_at && (
                                    <div className="space-y-2">
                                        <h4 className="font-medium leading-none">
                                            Received At
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {new Date(
                                                notification.created_at,
                                            ).toLocaleString()}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            );
        },
    },
];
