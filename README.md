# 骂人宝典 / 祖安语录
![](https://img.shields.io/github/license/cndiandian/zuanbot.com)
![](https://visitor-badge.glitch.me/badge?page_id=cndiandian.zuanbot)

## 有什么用
可以随机输出一条骂人的句子，有`口吐芬芳`与`火力全开`两个模式。

## 词库下载
[阿里云盘](https://www.aliyundrive.com/s/StTs9ojDAEF)、[蓝揍云](https://shadiao.lanzouw.com/b0116bgub) `密码hck1` 、 [诚通网盘](https://url08.ctfile.com/d/14688008-46477369-3732e0) `密码9919` 

在线文档：[Notion文档](https://dians.notion.site/d865fac077f1430f9510d020f8713c8e)、[口吐芬芳(谷歌文档)](https://docs.google.com/document/d/1SskgYtDpYL6P_4qmX2A1ndBl8MY5NeDcBaYPxS-yxIo/edit?usp=sharing) 、[火力全开(谷歌文档)](https://docs.google.com/document/d/14YG9qaNDZk275av-Iss6B6YY-eDTdkS5w_my3f7349A/edit?usp=sharing)

## 如何使用
下载后放在任意一个支持php的目录就可以使用啦，各位如果有通过本代码搭建了新的站点，欢迎告知，我会在主站贴上您的站点。

## 为啥要开源
本站是 https://zuanbot.com 的源站点，在2022年1月7日中午发现域名被墙且DNS被污染，不想再换域名周旋了，索性就关站停止服务了；

粉丝群也一直有人表示有需要，所以就把词库与源码都放出来了，不过实际也没啥技术难度，核心代码只有一行而已。

## 什么原理
收集整理了N条骂人的句子，然后随机读取一条输出即可。

核心代码就一行：
```sql
SELECT * FROM `main` ORDER BY RANDOM() limit 1
```

## 词库都是怎么来的
最初来源于网络收集了一些，后来基本就都是各位用户的投稿了，投稿渠道现已关闭。

## 写在最后
还有其他好玩的生成器，比如彩虹屁生成器、毒鸡汤、朋友圈文案等等，请访问 https://shadiao.app 体验。

同时也欢迎交流，可以扫码加微信，请备注 `github`，同时有`粉丝群`与`开发者群`，有兴趣可以私聊告知，会尽快拉你。

![](http://qiniu.xshwy.cn/ddd.jpg)
