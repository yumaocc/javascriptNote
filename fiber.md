- React fiber:React fiber是对核心算法的一次重新实现。
    - fiber是react16实现的一套新的更新机制，让react的更行过程变得可控，避免了之前采用递归需要一气呵成影响性能的做法，
- React fiber没有出现之前存在的问题：假设更新一个组件需要 1ms，如果有200个组件要更新，那就需要    200ms，在这200ms的更新过程中，浏览器唯一的主线程都在专心运行更新操作，无暇去做任何其他的事情。
- 为了解决什么问题
    - 就是为了解决渲染复杂组件时严重影响用户和浏览器交互的问题。js 是单线程语言，他同时只能做一件事，如果有一个很复杂很费时间的组件需要渲染，在这个组件渲染完成之前，用户都不能和浏览器进行交互。
-   有了fiber之后，组件的更新就是可控制，当有一个优先级更高的任务时，就会停止页面更行，执行优先级更高的任务，等有时间了再执行组件的更行
- fiber怎么解决
    - fiber将一个大的任务分成了很多小的时间单元，每执行完一个就把控制权交出去
    