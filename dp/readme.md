算法中最大占比 动态规划 DP
思想， 建立感性认识，具象学习  

- 爬楼梯
  70. 爬楼梯 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

  买一本小册， 记忆一些算法细节  geektime算法
  自顶向下问题 划分成子问题来解决的话  树状结构  请使用递归
两个关键特征
    1. 要求你给出达成某个目的的解决个数
    2. 不要求给出每种算法对应的具体路径

    1. 定位带问题的终点  n阶台阶的 走法
    2. 站在这个终点， 去考虑之前要做什么

   匹配了树状结构
   f(n)=f(n-1)+f(n+1)   //顶部

- 递归
  1. 问题细化后解决方法类似，以树状结构自顶向下设计，找到递归公式
  2. 要有退出条件
  3. 需要优化 用空间换时间

- 向下向上去解决的时候，就是动态规划  先记忆  很难把握
  站在已知的角度上，通过定位已知和未知之间的关系，一步一步向前推导师，求出未知的值

  读题  正常的想法  DP   最简单的DP
  n=1 n=2

  1-》n  for
  n=1  n=2   for(i=3;n)  公式：f(n)=f(n-1)+f(n-2)

  动态递归是递归的下一站
    1. 自下向上
    2. 发现公式，基于递归，来找到规律
      状态转移公式 
    之所以我们会放弃使用动态规划，选择递归来解决，是因为有些状态转移不明显

    不同面额的coins 和一个总金额 amout
    conss = [1,2,5] amout = 11
    所需的最小硬币个数
    动态思考解决的方式  最佳规划
    最值的问题一般是用DP来解决

    自顶向下思考一下
    11
    上次有多少钱
    f(n)=Math.min(f(n-5)+1,f(n-2)+1,f(n-1)+1)
