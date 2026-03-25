import { Card, CardHeader, CardTitle, CardContent, Avatar, AvatarImage, AvatarFallback, Badge } from '@beyondcorp/beyond-ui';

type CreatorRow = {
  id: string;
  name: string;
  avatar: string;
  posts: number;
  subscribers: number;
  avgRead: string;
};

type Props = {
  creators: CreatorRow[];
};

export function SubscriptionLeaderboard({ creators }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top creators</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {creators.map((creator) => (
          <div key={creator.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar size="sm">
                <AvatarImage src={creator.avatar} alt={creator.name} />
                <AvatarFallback>{creator.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm text-gray-900">{creator.name}</p>
                <p className="text-xs text-muted-foreground">
                  {creator.posts} posts · Avg read {creator.avgRead}
                </p>
              </div>
            </div>
            <Badge variant="secondary">{creator.subscribers.toLocaleString()} subs</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
