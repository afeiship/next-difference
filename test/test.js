var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-difference');

describe('next/difference', function () {

  it('nx.difference', function () {
    var arr_new = [
      '__project_prefix__//cdn.bootcss.com/spinkit/1.2.5/spinkit.min.css',
      '__project_prefix__//at.alicdn.com/t/font_671661_rs6ia63exiw45cdi.css',
      '__project_prefix__//cdn.bootcss.com/react-dom/16.4.0/umd/react-dom.production.min.js',
      '__project_prefix__/admin/antd-d02ee1.bundle.js?ver=0.0.2',
      '__project_prefix__/admin/antd/antd-d02ee1eff29de0566c4e.css?ver=0.0.2',
      '__project_prefix__/admin/antd/antd-d02ee1eff29de0566c4e.css?ver=0.0.2'
    ];

    var arr_old = [
      '__project_prefix__//cdn.bootcss.com/spinkit/1.2.5/spinkit.min.css',
      '__project_prefix__//at.alicdn.com/t/font_671661_rs6ia63exiw45cdi.css',
      '__project_prefix__//cdn.bootcss.com/react-dom/16.4.0/umd/react-dom.production.min.js',
      '__project_prefix__/admin/antd-d02ee1.bundle.js?ver=0.0.1',
      '__project_prefix__/admin/antd/antd-d02ee1eff29de0566c4e.css?ver=0.0.1',
      '__project_prefix__/admin/antd/antd-d02ee1eff29de0566c4e.css?ver=0.0.1'
    ];


    var rs1 = nx.difference(arr_new, arr_old);
    var rs2 = nx.difference(arr_old, arr_new);


    assert.deepEqual(rs1,
      ['__project_prefix__/admin/antd-d02ee1.bundle.js?ver=0.0.2',
        '__project_prefix__/admin/antd/antd-d02ee1eff29de0566c4e.css?ver=0.0.2',
        '__project_prefix__/admin/antd/antd-d02ee1eff29de0566c4e.css?ver=0.0.2']
    );

    assert.deepEqual(rs2,
      ['__project_prefix__/admin/antd-d02ee1.bundle.js?ver=0.0.1',
        '__project_prefix__/admin/antd/antd-d02ee1eff29de0566c4e.css?ver=0.0.1',
        '__project_prefix__/admin/antd/antd-d02ee1eff29de0566c4e.css?ver=0.0.1']
    );
  });

});
