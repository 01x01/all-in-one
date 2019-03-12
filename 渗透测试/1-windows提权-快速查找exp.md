# 1. 时刻关注微软发布的补丁
https://technet.microsoft.com/zh-cn/library/security/dn639106.aspx

# 2. 快速查找未打补丁的命令
```
systeminfo>micropoor.txt&(for %i in ( KB977165 KB2160329 KB2503665 KB2592799 KB2707511 KB2829361 KB2850851 KB3000061 KB3045171 KB3077657 KB3079904 KB3134228 KB3143141 KB3141780 ) do @type micropoor.txt|@find /i "%i"|| @echo %i you can fuck)&del /f /q /a micropoor.txt
```

一般实战在类似tmp的目录下执行


# 3. 已经公开的exp
https://github.com/SecWiki/windows-kernel-exploits 

https://github.com/WindowsExploits/Exploits 

https://github.com/AusJock/Privilege-Escalation

# 4. 熟悉windows已经公开的提权漏洞

