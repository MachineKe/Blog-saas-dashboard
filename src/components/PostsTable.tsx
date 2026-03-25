import { DataTable, type Column, Badge } from '@beyondcorp/beyond-ui';

export type PostRecord = {
  id: string;
  title: string;
  category: string;
  publishedAt: string;
  views: number;
  readTime: string;
  status: 'Published' | 'In Review';
};

const columns: Column<PostRecord>[] = [
  {
    key: 'title',
    title: 'Title',
    dataIndex: 'title',
    render: (value, record) => (
      <div className="space-y-1">
        <p className="font-medium text-sm text-gray-900">{value}</p>
        <p className="text-xs text-muted-foreground">{record.readTime}</p>
      </div>
    ),
    sortable: true,
  },
  {
    key: 'category',
    title: 'Category',
    dataIndex: 'category',
    filterable: true,
  },
  {
    key: 'views',
    title: 'Views',
    dataIndex: 'views',
    sortable: true,
    render: (value) => value.toLocaleString(),
  },
  {
    key: 'publishedAt',
    title: 'Published',
    dataIndex: 'publishedAt',
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    render: (value) => (
      <Badge variant={value === 'Published' ? 'success' : 'warning'}>
        {value}
      </Badge>
    ),
  },
];

type PostsTableProps = {
  data: PostRecord[];
};

export function PostsTable({ data }: PostsTableProps) {
  return (
    <DataTable
      columns={columns}
      dataSource={data}
      rowKey="id"
      pagination={{ current: 1, pageSize: 5, total: data.length }}
      size="small"
    />
  );
}
