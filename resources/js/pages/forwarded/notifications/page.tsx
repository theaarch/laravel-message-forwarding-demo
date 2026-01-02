import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface ForwardedNotification {
    id: number;
    from: string;
    content: string;
    created_at: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Forwarded Notifications',
        href: '/forwarded/notifications',
    },
];

export default function ForwardedNotifications({
    notifications,
}: {
    notifications: ForwardedNotification[];
}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Forwarded Notifications" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[150px]">From</TableHead>
                            <TableHead>Content</TableHead>
                            <TableHead className="w-[200px]">
                                Created At
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {notifications.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={3}
                                    className="text-center text-muted-foreground"
                                >
                                    No forwarded notifications found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            notifications.map((notification) => (
                                <TableRow key={notification.id}>
                                    <TableCell className="font-medium">
                                        {notification.from}
                                    </TableCell>
                                    <TableCell
                                        className="max-w-md truncate"
                                        title={notification.content}
                                    >
                                        {notification.content}
                                    </TableCell>
                                    <TableCell>
                                        {notification.created_at
                                            ? new Date(
                                                notification.created_at,
                                            ).toLocaleString()
                                            : '-'}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
