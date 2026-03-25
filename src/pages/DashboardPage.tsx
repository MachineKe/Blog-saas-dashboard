import { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@beyondcorp/beyond-ui';
import { Plus } from 'lucide-react';
import { DashboardShell } from '../components/DashboardShell';
import { PostsTable } from '../components/PostsTable';
import { SubscriptionLeaderboard } from '../components/SubscriptionLeaderboard';
import { SubscriptionSummary } from '../components/SubscriptionSummary';
import { creatorLeaderboard, recentPosts, subscriptionMetrics } from '../data/demo';

export function DashboardPage() {
  const [activeNav, setActiveNav] = useState('overview');

  return (
    <DashboardShell activeItem={activeNav} onSelectNav={setActiveNav}>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Recent Activity</CardTitle>
              <Button size="sm" variant="primary">
                <Plus className="h-4 w-4 mr-1" />
                New Post
              </Button>
            </CardHeader>
            <CardContent>
              <PostsTable data={recentPosts} />
            </CardContent>
          </Card>

          <SubscriptionSummary subscriptions={subscriptionMetrics} />
        </div>

        <div className="space-y-6">
          <SubscriptionLeaderboard creators={creatorLeaderboard} />
          <Card>
            <CardHeader>
              <CardTitle>Editorial Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Announce the April launch schedule to paid subscribers.</p>
              <p>Review pending guest post pitches before Friday.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}
