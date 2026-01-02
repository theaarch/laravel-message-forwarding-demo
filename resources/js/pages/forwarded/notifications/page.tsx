import { DataTable } from '@/components/data-table';
import { Pagination } from '@/components/pagination';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { columns, ForwardedNotification } from './columns';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Forwarded Notifications',
        href: '/forwarded/notifications',
    },
];

interface PaginatedData<T> {
    data: T[];
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
}

export default function ForwardedNotifications({
    notifications,
}: {
    notifications: PaginatedData<ForwardedNotification>;
}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Forwarded Notifications" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <DataTable columns={columns} data={notifications.data} />
                <Pagination links={notifications.links} />
            </div>
        </AppLayout>
    );
}
