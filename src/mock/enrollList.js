import Mock from 'mockjs';
let debug = 1;
if (debug) {
  Mock.mock(/enrolllist/, {
    'list|10': [{
      id: 1,
      ip: '@first',
      port: '@first',
      add_date: '@integer(124635635,2423467565)',
      update_date: '@first',
      stalled: '@first',
      stalled2: '@province',
      stalled3: '@city',
      stalled4: '@first',
      stalled5: '@date',
      stalled6: '@date',
      stalled7: '@date',
      stalled8: '@first',
      stalled9: '@first'
    }],
    msg: 'Success',
    status: 'YQ-000'
  });
}
