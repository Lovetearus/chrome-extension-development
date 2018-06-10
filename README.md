# chrome-extension-development
from 0 to 1 develop extension

jpg做图标貌似不行。

1. 自动替换掉页面图片 一种用后台的，
    直接自动替换；例外可以提供交换，在popup设计按钮手动控制

2.  background 存数据
3.  主播页面 自动下注    


### 任务
1. 按一定规则新建标签，判定是否是视频页面，不是就关掉
  1. use setTimeout ,the extension always crash ..
  
        let count = 0

        while (count < 13) {

            setTimeout(() => {

                console.log(count)
                count++
            }, 2000);

        }
        
  it is not working .nothing is happen in debugger?        


