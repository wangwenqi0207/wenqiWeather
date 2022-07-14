const getBackground  = function(city){
    switch (city)
    {
    case '西安':
      return 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd8%2F201407%2F11%2F599f68cc53c885e5c8d65eac.jpg_r_510x680x95_cdbb6ec4.jpg&refer=http%3A%2F%2Fimg1.qunarzz.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660392816&t=9b0a3d98f681d0a5f2b6388748b8adac';
    case '杭州':
      return 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbizhi.qqju.com%2Fpic%2Fbz%2Fbz138_1.jpg&refer=http%3A%2F%2Fbizhi.qqju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660394320&t=7f59fd65ec522865f7c49e943cd610d2';
    case '北京':
      return 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.dnzhuti.com%2Fuploads%2Fallimg%2F170122%2F95-1F1221A344.jpg&refer=http%3A%2F%2Fwww.dnzhuti.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660394494&t=d5c5ca0e7207a5e9f38430c25f28f3b5';
      default:return '#000';
    }
}

export default getBackground