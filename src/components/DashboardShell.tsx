import type { ReactNode } from 'react';
import {
  DashboardLayout,
  StatsCard,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  type MenuItem,
} from '@beyondcorp/beyond-ui';
import { BarChart3, Edit3, Users, Home } from 'lucide-react';

type DashboardShellProps = {
  children: ReactNode;
  onSelectNav?: (id: string) => void;
  activeItem?: string;
};

const menuItems: MenuItem[] = [
  { id: 'overview', label: 'Overview', icon: <Home className="h-5 w-5" /> },
  { id: 'posts', label: 'Posts', icon: <Edit3 className="h-5 w-5" /> },
  { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="h-5 w-5" /> },
  { id: 'subscriptions', label: 'Subscriptions', icon: <Users className="h-5 w-5" /> },
];

export function DashboardShell({ children, activeItem = 'overview', onSelectNav }: DashboardShellProps) {
  return (
    <DashboardLayout
      sidebarMenuItems={menuItems}
      activeSidebarItem={activeItem}
      onSidebarItemClick={onSelectNav}
      breadcrumbs={[
        { label: 'Blog SaaS' },
        { label: activeItem.charAt(0).toUpperCase() + activeItem.slice(1) },
      ]}
    >
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <StatsCard
            title="Total Posts"
            value="132"
            trend={{ direction: 'up', value: '+8%', label: 'vs last month' }}
            icon={<Edit3 className="h-6 w-6 text-primary-500" />}
          />
          <StatsCard
            title="Unpublished Drafts"
            value="24"
            trend={{ direction: 'down', value: '-3%', label: 'vs last month' }}
            icon={<Home className="h-6 w-6 text-primary-500" />}
          />
          <StatsCard
            title="Active Subscribers"
            value="4,980"
            trend={{ direction: 'up', value: '+12%', label: 'vs last month' }}
            icon={<Users className="h-6 w-6 text-primary-500" />}
          />
        </div>
        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="recent">Recent Posts</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          </TabsList>
          <TabsContent value="recent">{children}</TabsContent>
          <TabsContent value="drafts" className="text-sm text-muted-foreground">
            No drafts waiting on review.
          </TabsContent>
          <TabsContent value="scheduled" className="text-sm text-muted-foreground">
            Next release goes live on Friday at 9:00 AM.
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
