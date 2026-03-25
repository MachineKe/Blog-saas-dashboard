import { Card, CardHeader, CardTitle, CardContent, StatsCard } from '@beyondcorp/beyond-ui';

type SubscriptionMetric = {
  id: string;
  plan: string;
  active: number;
  churn: string;
  mrr: string;
};

type Props = {
  subscriptions: SubscriptionMetric[];
};

export function SubscriptionSummary({ subscriptions }: Props) {
  const totalMrr = subscriptions
    .map((plan) => Number(plan.mrr.replace(/[$,]/g, '')))
    .reduce((acc, value) => acc + value, 0);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <StatsCard
        title="Total MRR"
        value={`$${totalMrr.toLocaleString()}`}
        trend={{ direction: 'up', value: '+9%', label: 'vs last month' }}
      />
      <Card>
        <CardHeader>
          <CardTitle>Plan breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {subscriptions.map((plan) => (
            <div key={plan.id} className="flex items-center justify-between text-sm">
              <div>
                <p className="font-medium text-gray-900">{plan.plan}</p>
                <p className="text-xs text-muted-foreground">{plan.active.toLocaleString()} active</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{plan.mrr}</p>
                <p className="text-xs text-muted-foreground">Churn {plan.churn}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
