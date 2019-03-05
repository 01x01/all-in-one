* [基本概念](#基本概念)
* [优势](#优势)
    * [简化程序：](#简化程序)
    * [节省开支：](#节省开支)
* [与传统虚拟机相比](#与传统虚拟机相比)
* [基础架构](#基础架构)
* [技术基础](#技术基础)
* [安装部署](#安装部署)
    * [如何安装Docker](#如何安装docker)
    * [配置国内的源](#配置国内的源)
    * [基本命令](#基本命令)
    
# 基本概念
> Docker是一个开源的应用容器引擎，基于Go语言并遵从Apache2.0协议开源。Docker可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的Linux机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口（类似iPhone的App），更重要的是容器性能开销极低

# 优势

## 简化程序：
> Docker让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的Linux机器上，便可以实现虚拟化。Docker改变了虚拟化的方式，使开发者可以直接将自己的成果放入Docker中进行管理。方便快捷已经是Docker的最大优势，过去需要用数天乃至数周的 任务，在Docker容器的处理下，只需要数秒就能完成。

## 节省开支：

> 一方面，云计算时代到来，使开发者不必为了追求效果而配置高额的硬件，Docker改变了高性能必然高价格的思维定势。Docker与云的结合，让云空间得到更充分的利用。不仅解决了硬件管理的问题，也改变了虚拟化的方式。

# 与传统虚拟机相比
1. 启动和停止很快，甚至可以在秒级别实现
2. Docker容器对资源对需求很少，一台主机上可以同时运行数千个容器
3. Docker可以通过类似git的操作来方便用户的获取，分发和更新应用镜像，指令简明，学习成本低
4. Docker可以通过Docker file配置文件来支持灵活的自动化创建和部署机制，提高工作效率
5. Docker 除了运行在其中的应用外，基本上不消耗任何的系统资源，保证应用性能的同时，减少了系统开销
6. Docker 利用了Linux上的多种防护机制实现了严格可靠的隔离，引入了安全选项和镜像签名制度，极大提高了安全性

# 基础架构
1. 通过远程API来管理和创建Docker容器
2. 本地直接创建和管理容器


# 技术基础
1. Namespace，容器隔离的基础，保证A容器看不到B容器，6个名空间：User、Mnt、Network、UTS、IPC、Pid
2. CGroups，容器资源统计和隔离。主要用到的CGroups子系统：CPU、blkio、Device、freezer、memory
3. UnionFS，典型：AUFS/OverlayFS，分层镜像实现的基础

# 安装部署
## 如何安装Docker
以centos 为例子
```
# 1. 安装源
$ sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2

sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

# 2. 安装最新版 docker    
$ sudo yum install docker-ce docker-ce-cli containerd.io

# 3. 安装特定版本docker
$ yum list docker-ce --showduplicates | sort -r
$ sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io

# 4. 启动docker
$ sudo systemctl start docker
$ systemctl enable docker        


# 5. 验证
$ sudo docker run hello-world

```
详细可参考： https://docs.docker.com/install/ 
## 配置国内的源
```
//get.daocloud.io/daotools/set_mirror.sh | sh -s http://d6f11267.m.daocloud.io
脚本是写入
echo "{\"registry-mirrors\": [\"http://d6f11267.m.daocloud.io\"]}">/etc/docker/daemon.json
systemctl restart docker              
```

## 基本命令
```
# 拉取镜像
docker pull docker.io/ansible/centos7-ansible
# 查看本地镜像
docker images 
# 容器操作
docker create  # 创建一个容器但是不启动它
docker run     # 创建并启动一个容器
docker stop    # 停止容器运行，发送信号SIGTERM
docker start   # 启动一个停止状态的容器
docker restart # 重启一个容器
docker rm      # 删除一个容器
docker kill    # 发送信号给容器，默认SIGKILL
docker attach  # 连接(进入)到一个正在运行的容器
docker wait    # 阻塞一个容器，直到容器停止运行
```
获取容器信息
```
docker ps 
# 显示状态为运行（Up）的容器
docker ps -a    # 显示所有容器,包括运行中（Up）的和退出的(Exited)
docker inspect  # 深入容器内部获取容器所有信息
docker logs     # 查看容器的日志(stdout/stderr)
docker events   # 得到docker服务器的实时的事件
docker port     # 显示容器的端口映射
docker top      # 显示容器的进程信息
docker diff     # 显示容器文件系统的前后变化
```
进入容器
```
docker exec -it <contain_name> /bin/bash
```
镜像操作
```
docker images   # 显示本地所有的镜像列表
docker import   # 从一个tar包创建一个镜像，往往和export结合使用
docker build    # 使用Dockerfile创建镜像（推荐）
docker commit   # 从容器创建镜像
docker rmi      # 删除一个镜像
docker load     # 从一个tar包创建一个镜像，和save配合使用
docker save     # 将一个镜像保存为一个tar包，带layers和tag信息
docker history  # 显示生成一个镜像的历史命令
docker tag      # 为镜像起一个别名
```


