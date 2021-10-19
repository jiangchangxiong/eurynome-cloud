"use strict";(self.webpackChunkeurynome_cloud_document=self.webpackChunkeurynome_cloud_document||[]).push([[152],{7341:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-23340e69",path:"/documents/%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2.html",title:"环境部署",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"准备工作",slug:"准备工作",children:[{level:3,title:"后端运行所需的基础设施",slug:"后端运行所需的基础设施",children:[]},{level:3,title:"前端运行所需的基础设施",slug:"前端运行所需的基础设施",children:[]}]},{level:2,title:"后端运行",slug:"后端运行",children:[{level:3,title:"[1]、检出代码创建工程",slug:"_1-、检出代码创建工程",children:[]},{level:3,title:"[2]、创建数据库",slug:"_2-、创建数据库",children:[]},{level:3,title:"[3]、创建或导入Nacos配置",slug:"_3-、创建或导入nacos配置",children:[]},{level:3,title:"[4]、修改Nacos配置",slug:"_4-、修改nacos配置",children:[]},{level:3,title:"[5]、修改pom.xml配置",slug:"_5-、修改pom-xml配置",children:[]},{level:3,title:"[6]、编译代码",slug:"_6-、编译代码",children:[]},{level:3,title:"[7]、数据库创建和数据初始化",slug:"_7-、数据库创建和数据初始化",children:[]},{level:3,title:"[8]、运行服务模块",slug:"_8-、运行服务模块",children:[]},{level:3,title:"[9]、运行ELK（可选）",slug:"_9-、运行elk-可选",children:[]},{level:3,title:"[10]、以Docker方式部署（可选）",slug:"_10-、以docker方式部署-可选",children:[]},{level:3,title:"[11]、部署验证",slug:"_11-、部署验证",children:[]}]},{level:2,title:"前端运行",slug:"前端运行",children:[{level:3,title:"[1]、检出代码",slug:"_1-、检出代码",children:[]},{level:3,title:"[2]、修改配置",slug:"_2-、修改配置",children:[]},{level:3,title:"[3]、前端运行命令",slug:"_3-、前端运行命令",children:[]},{level:3,title:"[4]、运行验证",slug:"_4-、运行验证",children:[]}]}],filePathRelative:"documents/环境部署.md",git:{updatedTime:163439633e4,contributors:[{name:"herodotus",email:"pointer_v@qq.com",commits:6}]}}},3212:(n,a,e)=>{e.r(a),e.d(a,{default:()=>Fn});var s=e(6252);const t=(0,s.uE)('<h1 id="环境部署" tabindex="-1"><a class="header-anchor" href="#环境部署" aria-hidden="true">#</a> 环境部署</h1><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><h3 id="后端运行所需的基础设施" tabindex="-1"><a class="header-anchor" href="#后端运行所需的基础设施" aria-hidden="true">#</a> 后端运行所需的基础设施</h3><table><thead><tr><th>设施</th><th>当前版本</th><th>说明</th></tr></thead><tbody><tr><td>Nacos</td><td>2.0.3</td><td>分布式版本使用的Nacos作为配置中心和服务发现中心，所以需要安装Nacos。不管本地运行还是Docker、K8S环境都需要。</td></tr><tr><td>Redis</td><td>3.2.100+</td><td>运行的必须组件，分布式版本、单体版本；本地运行还是还是Docker、K8S环境都需要</td></tr><tr><td>Kafka</td><td>2.6.0+</td><td>运行的必须组件，分布式版本、单体版本；本地运行还是还是Docker、K8S环境都需要。（虽然本系统使用的是spring cloud bus同时兼容RabbitMQ和Kafka，由于使用Debezium来支持工作流、ElasticSearch数据同步，所以如果没有特殊的使用需求还是建议使用Kafka）</td></tr><tr><td>PostgreSQL 数据库</td><td>建议使用最新版，其它版本也可以运行</td><td>个人多年项目经验，感觉PostgreSQL更好用和顺手，所以默认数据为PostgreSQL。基础代码都是使用spring data jpa（Mybatis Plus也支持），所以其它数据库也支持，修改一下配置就行</td></tr><tr><td>MySQL 数据库</td><td>5.6.5+</td><td>Nacos 运行需要依赖数据库，长久运行需要依赖于MySQL（目前Nacos不支持其它数据库，虽说Nacos RoadMap有多数据库支持，不知道什么时候开发完成）。本地运行为了省事，也可以用Nacos的内置数据库，这样减少本地运行资源占用</td></tr><tr><td>Sentinel Dashboard</td><td>1.8.0</td><td>本地调试运行可以不需要</td></tr><tr><td>Skywalking</td><td>8.7.0</td><td>本地运行可以不需要</td></tr><tr><td>ELK</td><td>7.0.0 +</td><td>日志中心中心所需基础环境，本地运行可以不需要，需要在配置关闭日志收集</td></tr></tbody></table><ul><li><strong>(1) 后端本地运行所需标准最小环境</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Nacos &gt;= 1.1.0 (推荐使用最新版Nacos)\nRedis &gt;= 3.0.0\nKafka &gt;= 2.6.0 (目前Kafka运行还需要依赖Zookeeper)\nPostgreSQL &gt;= 10\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><strong>(2) 开发环境</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>IDEA 或 Eclipse （推荐IDEA）\nJDK &gt;= 1.8 (推荐1.8版本)\nMaven &gt;= 1.3\nGit 使用最新版\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="前端运行所需的基础设施" tabindex="-1"><a class="header-anchor" href="#前端运行所需的基础设施" aria-hidden="true">#</a> 前端运行所需的基础设施</h3><table><thead><tr><th>设施</th><th>当前版本</th><th>说明</th></tr></thead><tbody><tr><td>Nodejs</td><td>14.17.0 +</td><td>运行前端Vue工程必须依赖，如果不需要运行前端可以忽略</td></tr><tr><td>Yarn</td><td>1.22.10</td><td>前端包管理工具，如果习惯使用Yarn，用Npm或其它工具也都可以</td></tr></tbody></table><ul><li><strong>(1) 前端端本地运行所需标准最小环境</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Nodejs&gt;= 10\nYarn&gt;= 1.22.10 （Yarn2 目前会有很多问题，劣势太多不建议使用）\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><strong>(2) 开发环境</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Visual Studio Code （Vscode）或其它 （推荐Vscode）\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>(3) 环境配置</strong></li></ul>',15),l={href:"https://blog.csdn.net/Pointer_v/article/details/105432529?spm=1001.2014.3001.5501",target:"_blank",rel:"noopener noreferrer"},o=(0,s.Uk)("参见个人博客"),c=(0,s.uE)('<h2 id="后端运行" tabindex="-1"><a class="header-anchor" href="#后端运行" aria-hidden="true">#</a> 后端运行</h2><div class="custom-container warning"><p class="custom-container-title">说明</p><p>开展以下各项工作以前，请确保数据库应用、Redis、Nacos、ELK 套件已经正确安装和运行。</p></div><h3 id="_1-、检出代码创建工程" tabindex="-1"><a class="header-anchor" href="#_1-、检出代码创建工程" aria-hidden="true">#</a> [1]、检出代码创建工程</h3><h4 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一</h4>',4),p=(0,s.Uk)("前往"),r={href:"https://gitee.com/herodotus/eurynome-cloud",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Uk)("Gitee下载页面"),d=(0,s.Uk)("下载解压到工作目录"),u=(0,s.uE)("<li><p>打开IDE导入工程</p></li><li><p><code>Eclipse</code>，菜单 <code>File -&gt; Import</code>，然后选择 <code>Maven -&gt; Existing Maven Projects</code>，点击 <code>Next</code> 按钮，选择工作目录，然后点击 <code>Finish</code> 按钮，即可成功导入。</p></li><li><p><code>IDEA</code>，菜单 <code>File -&gt; Open</code>，然后选择已解压工程所在的目录，点击 <code>OK</code> 即可。</p></li>",3),g=(0,s._)("blockquote",null,[(0,s._)("p",null,"IDE会自动加载相关的依赖包，具体要依据网络以及个人本地Maven缓存情况而定。")],-1),h=(0,s._)("h4",{id:"方式二",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#方式二","aria-hidden":"true"},"#"),(0,s.Uk)(" 方式二")],-1),k=(0,s._)("code",null,"IDEA",-1),m=(0,s.Uk)(" 菜单 "),b=(0,s._)("code",null,"File -> New -> Project From Version Control...",-1),_=(0,s.Uk)(", 在弹出框中输入本工程Git地址："),v={href:"https://gitee.com/herodotus/eurynome-cloud.git",target:"_blank",rel:"noopener noreferrer"},E=(0,s.Uk)("https://gitee.com/herodotus/eurynome-cloud.git"),f=(0,s.Uk)("，然后设置放置目录，点击 "),A=(0,s._)("strong",null,"OK",-1),U=(0,s.Uk)(" 即可"),x=(0,s.uE)('<h3 id="_2-、创建数据库" tabindex="-1"><a class="header-anchor" href="#_2-、创建数据库" aria-hidden="true">#</a> [2]、创建数据库</h3><p>进入<code>PostgreSQL</code> 的<code>SQL Shell(psql)</code> (在Windows的菜单中可以找到)，使用超级管理员账号和密码登录进入数据库，执行以下脚本：</p><div class="language-postgresql ext-postgresql line-numbers-mode"><pre class="language-postgresql"><code>CREATE USER herodotus WITH PASSWORD &#39;herodotus&#39;;\nCREATE DATABASE herodotus OWNER herodotus;\nGRANT ALL PRIVILEGES ON DATABASE herodotus TO herodotus;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container danger"><p class="custom-container-title">注意</p><p>要分步、一条一条地执行，不要全部复制，一把全部执行。一定要注意每个语句结尾要以“;”结束。</p></div><div class="custom-container warning"><p class="custom-container-title">说明</p><ul><li>这里不管是用户名、用户密码还是数据库名均使用herodotus是为了方便，请根据自己实际情况修改。</li><li>这里没有进行分库（即：所有的服务使用同一个数据库），如不满足需求，请在整体部署完成可以正常运行后，再结合自己的实际情况修改。</li><li>以上是均是以 <code>PostgreSQL</code> 作为默认数据库进行说明，如果要使用其它数据库，具体安装和建库步骤请自行探索。</li></ul></div>',5),y={class:"custom-container tip"},N=(0,s._)("p",{class:"custom-container-title"},"提示",-1),D=(0,s.Uk)("系统默认使用 "),S=(0,s._)("code",null,"PostgreSQL",-1),P=(0,s.Uk)(" 数据库，如果想要使用其它数据库，建议详细全面阅读本章节，对整体部署过程有了详细了解之后，再来了解如何切换数据库。参阅："),L=(0,s.Uk)("更换数据库"),w=(0,s._)("div",{class:"custom-container tip"},[(0,s._)("p",{class:"custom-container-title"},"提示"),(0,s._)("p",null,[(0,s._)("code",null,"Linux"),(0,s.Uk)(" 环境下在命令行中，以管理员账号登录 "),(0,s._)("code",null,"PostgreSQL"),(0,s.Uk)("数据库")])],-1),C=(0,s._)("h3",{id:"_3-、创建或导入nacos配置",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#_3-、创建或导入nacos配置","aria-hidden":"true"},"#"),(0,s.Uk)(" [3]、创建或导入Nacos配置")],-1),K={class:"custom-container warning"},T=(0,s._)("p",{class:"custom-container-title"},"说明",-1),I=(0,s.Uk)("再进行以下操作之前，请确保对Nacos中 Namespace、Group等基础概念和具体操作有所了解。"),W={href:"https://nacos.io/zh-cn/docs/concepts.html",target:"_blank",rel:"noopener noreferrer"},O=(0,s.Uk)("【官方文档】"),R=(0,s._)("h4",{id:"方式一-手动创建nacos配置信息",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#方式一-手动创建nacos配置信息","aria-hidden":"true"},"#"),(0,s.Uk)(" 方式一：手动创建Nacos配置信息")],-1),B=(0,s._)("p",null,[(0,s.Uk)("工程的 "),(0,s._)("code",null,"${project_home}/platform/eurynome-cloud-management/resources/configs"),(0,s.Uk)(" 目录下，放置着所有需要导入到 "),(0,s._)("code",null,"Nacos"),(0,s.Uk)(" 中的默认配置。开始其它工作之前，需要先在Nacos中创建所有配置")],-1),M=(0,s.Uk)("访问 "),V=(0,s._)("code",null,"Nacos",-1),G=(0,s.Uk)(" 后台管理，"),j={href:"http://localhost:8848/nacos",target:"_blank",rel:"noopener noreferrer"},q=(0,s.Uk)("默认本机地址"),F=(0,s.Uk)(", 使用默认账号"),Q=(0,s._)("code",null,"nacos/nacos",-1),Y=(0,s.Uk)("登录。"),H=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("在 "),(0,s._)("code",null,"Nacos"),(0,s.Uk)(" 后台中，在 "),(0,s._)("code",null,"配置管理 --\x3e 配置列表"),(0,s.Uk)(" 功能中，点击"),(0,s._)("strong",null,"添加"),(0,s.Uk)("按钮，手动添加所有配置文件，操作如下图所示：")])],-1),$=(0,s.uE)('<p><img src="/eurynome-cloud/images/nacos/config-create.png" alt="创建Nacos配置"></p><div class="custom-container danger"><p class="custom-container-title">注意</p><ul><li>创建配置之前，请提前规划配置放置的命名空间（Namespace）。默认是放到 Nacos <code>public</code>命名空间中，如果不符合您的需求，可以在新建命名空间之后，再进行配置的创建。</li><li><code>${project_home}/platform/eurynome-cloud-management/resources/configs</code> 目录下，还有一级目录。这级目录的名称，是配置文件对应 <code>Nacos</code> 中的 <code>Group</code> 名称。所以在 <code>Nacos</code> 中新建配置时，一定要注意 <code>Group</code> 的创建和匹配。切勿全部新建到 <code>DEFAULT</code> 组下，这样会导致无法正常运行。</li></ul></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>本项目所有<code>Nacos</code>配置，均是采用<code>yaml</code>格式。如需使用其它格式请自行修改</p></div><h4 id="方式二-批量导入nacos配置" tabindex="-1"><a class="header-anchor" href="#方式二-批量导入nacos配置" aria-hidden="true">#</a> 方式二：批量导入Nacos配置</h4><p>手动方式创建Nacos配置，比较繁琐和容易出错。为了使用提升使用的便捷性，在工程 <code>${project_home}/platform/eurynome-cloud-management/resources/imports</code> 目录下提供可以直接导入的配置包。可以方便的完成导入配置、创建<code>Group</code>等操作。</p>',5),z=(0,s.Uk)("访问 "),J=(0,s._)("code",null,"Nacos",-1),Z=(0,s.Uk)(" 后台管理，"),X={href:"http://localhost:8848/nacos",target:"_blank",rel:"noopener noreferrer"},nn=(0,s.Uk)("默认本机地址"),an=(0,s.Uk)(", 使用默认账号"),en=(0,s._)("code",null,"nacos/nacos",-1),sn=(0,s.Uk)("登录。"),tn=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("在 "),(0,s._)("code",null,"Nacos"),(0,s.Uk)(" 后台中，在 "),(0,s._)("code",null,"配置管理 --\x3e 配置列表"),(0,s.Uk)(" 功能中，点击"),(0,s._)("strong",null,"导入配置"),(0,s.Uk)("按钮，选择配置导入包即可，完成配置文件导入和Group的创建，操作如下图所示：")])],-1),ln=(0,s.uE)('<p><img src="/eurynome-cloud/images/nacos/config-import.png" alt="导入Nacos配置"></p><div class="custom-container danger"><p class="custom-container-title">注意</p><ul><li>创建配置之前，请提前规划配置放置的命名空间（Namespace）。默认是放到 Nacos <code>public</code>命名空间中，如果不符合您的需求，可以在新建命名空间之后，再进行配置的创建。</li></ul></div><h3 id="_4-、修改nacos配置" tabindex="-1"><a class="header-anchor" href="#_4-、修改nacos配置" aria-hidden="true">#</a> [4]、修改Nacos配置</h3><p>上一步所导入的配置信息均是使用默认的、本地化的配置，需要根据自己搭建的基础设施环境，对相关的配置进行修改。</p>',4),on=(0,s.Uk)("访问 "),cn=(0,s._)("code",null,"Nacos",-1),pn=(0,s.Uk)(" 后台管理，"),rn={href:"http://localhost:8848/nacos",target:"_blank",rel:"noopener noreferrer"},dn=(0,s.Uk)("默认本机地址"),un=(0,s.Uk)(", 使用默认账号"),gn=(0,s._)("code",null,"nacos/nacos",-1),hn=(0,s.Uk)("登录。"),kn=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("找到对应的配置文件进行修改。常用的设置在 "),(0,s._)("code",null,"eurynome-cloud-environment.yaml"),(0,s.Uk)(" 中即可修改完成，如果不满足您实际需求，可再到其它的配置文件中详细修改。")])],-1),mn={class:"custom-container tip"},bn=(0,s.uE)('<p class="custom-container-title">说明</p><p>为了方便使用，<strong>Eurynome Cloud</strong> 所有的配置采用**“共享式、统一化多环境配置模式”**设计，大多数配置在对应 <code>多环境</code> 的 <code>eurynome-cloud-environment.yaml</code> 配置中就可以完成修改。例如，您当前使用的是 <code>development</code> 环境，那么在Nacos后台管理中，找到 Group 是 <code>development</code> 的 <code>eurynome-cloud-environment.yaml</code> 配置修改。</p>',2),_n=(0,s._)("strong",null,"Eurynome Cloud",-1),vn=(0,s.Uk)(" 多环境配置设计及使用，参阅："),En=(0,s.Uk)("多环境配置"),fn=(0,s.uE)('<h3 id="_5-、修改pom-xml配置" tabindex="-1"><a class="header-anchor" href="#_5-、修改pom-xml配置" aria-hidden="true">#</a> [5]、修改pom.xml配置</h3><p>在工程根目录下，找到 <code>pom.xml</code>, 修改对应 <code>profile</code> 中参数。由于使用的多环境，所以在该文件中，需要找到应环境的配置，修改该环境下的对应的配置信息。主要结构如下所示：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- 开发 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>development<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activation</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activation</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile.name</span><span class="token punctuation">&gt;</span></span>development<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile.name</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>database.type</span><span class="token punctuation">&gt;</span></span>postgresql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>database.type</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>skip.build.source.package</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>skip.build.source.package</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>skip.copy.docker.resource</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>skip.copy.docker.resource</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>skip.build.git.commit.info</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>skip.build.git.commit.info</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>config.server-addr</span><span class="token punctuation">&gt;</span></span>127.0.0.1:8848<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>config.server-addr</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>config.namespace</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>config.namespace</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>discovery.server-addr</span><span class="token punctuation">&gt;</span></span>127.0.0.1:8848<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>discovery.server-addr</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sentinel.server-addr</span><span class="token punctuation">&gt;</span></span>127.0.0.1:8858<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sentinel.server-addr</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>必须要修改的参数涉及以下几项：</p><ul><li><strong>config.server-addr</strong>：配置中心地址，即Nacos服务端地址</li><li><strong>config.namespace</strong>：Nacos 命名空间ID。如果要使用的是默认的命名空间，该参数不设置任何值。</li><li><strong>discovery.server-addr</strong>：服务发现地址，即Nacos服务端地址</li><li><strong>sentinel.server-addr</strong>：Sentinel Dashborad 地址</li></ul>',5),An=(0,s.Uk)("详细参数说明，参阅："),Un=(0,s.Uk)("多环境配置"),xn=(0,s.uE)('<h3 id="_6-、编译代码" tabindex="-1"><a class="header-anchor" href="#_6-、编译代码" aria-hidden="true">#</a> [6]、编译代码</h3><h4 id="编译方式一" tabindex="-1"><a class="header-anchor" href="#编译方式一" aria-hidden="true">#</a> 编译方式一</h4><p>用命令行进入到工程代码所在根据目录，通过执行下面命令进行编译</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn <span class="token function">install</span>\n\n或 \n\nmvn package\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>推荐使用<code>install</code>命令，进行编译。使用该命令编译完成之后，会在<code>Maven</code>本地缓存中，生成响应的包，这样<code>eurynome-cloud-athena</code>功能就可以直接使用。</p></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在第一次编译的时候，因为在本地缓存缺少相关的包，所以在执行 <code>mvn clean</code> 操作时会提示错误。因此，在第一次编译时只使用 <code>mvn package</code> 或 <code>mvn install</code>。第一次编译完成之后，就可以使用 <code>mvn clean package</code> 或 <code>mvn clean install</code> 命令进行编译。IDE界面操作也是同理。</p></div><h4 id="编译方式二" tabindex="-1"><a class="header-anchor" href="#编译方式二" aria-hidden="true">#</a> 编译方式二</h4><p>在IDE工程中，利用IDE提供的界面操作进行编译。</p><p>以<code>IDEA</code>为例，在右侧<code>Maven Panel</code>中，选择<code>eurynome-cloud(root)</code>节点，点击Lifecycle节点下的<code>install</code> 或者 <code>package</code> 进行编译。参考下图：</p><p><img src="/eurynome-cloud/images/idea/lifecycle.png" alt="输入图片说明"></p><h3 id="_7-、数据库创建和数据初始化" tabindex="-1"><a class="header-anchor" href="#_7-、数据库创建和数据初始化" aria-hidden="true">#</a> [7]、数据库创建和数据初始化</h3>',11),yn=(0,s.Uk)("具体操作方法，参阅："),Nn=(0,s.Uk)("数据初始化"),Dn=(0,s.uE)('<h3 id="_8-、运行服务模块" tabindex="-1"><a class="header-anchor" href="#_8-、运行服务模块" aria-hidden="true">#</a> [8]、运行服务模块</h3><div class="custom-container tip"><p class="custom-container-title">说明</p><p>各个服务的启动顺序并没有严格的要求，启动的先后顺序并不影响实际的使用，但是部分核心代码逻辑以及组件存在“时机性”问题，启动顺序的不同会略有时机差异性。</p><p>如果您对时机性没有要求，那么请忽略启动顺序问题，随意启动。</p><p>如果您对时机性有较高要求，那么请详细阅读各个服务对应的备注说明。</p></div><ul><li>ManagementApplication （监控中心服务 可选。）</li></ul><div class="custom-container warning"><p class="custom-container-title">说明</p><p>本质上 <code>ManagementApplication</code> 服务先启动还是后启动，并不影响平台的实际使用。仅有的影响是</p><ul><li>先启动<code>ManagementApplication</code>服务，然后再启动其它服务，<code>Spring Boot Admin</code>会马上收到服务的运行监控信息，进行及时的展示；</li><li>如果后启动<code>ManagementApplication</code>服务，其它在<code>ManagementApplication</code>之前运行服务的监控信息会间隔一段时间才会展现。</li></ul><blockquote><p>如果要使用该服务中的<code>Spring Boot Admin</code>监控，建议最先启动该服务。</p></blockquote></div><ul><li>UpmsApplication （用户中心服务 必须）</li><li>GatewayApplication （服务网关服务 必须）</li><li>UaaApplication （统一认证服务 必须）</li><li>BpmnApplication （分布式工作流 可选）</li></ul><h3 id="_9-、运行elk-可选" tabindex="-1"><a class="header-anchor" href="#_9-、运行elk-可选" aria-hidden="true">#</a> [9]、运行ELK（可选）</h3><p>完整运行本套微服务架构，需要搭建 <code>ELK</code> 套件，作为日志中心以及 <code>Skywalking</code> 链路追踪的数据存储介质。</p><p>目前已有基础功能尚未涉及到搜索，只有日志中心和链路追踪功能涉及到 <code>Elasticsearch</code>。如果本地开发不要相关功能，就不需要安装和运行<code>ELK</code>套件。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果本地不想使用 <code>ELK</code>，那么需要关闭微服务的日志收集功能。</p><p>修改你所使用 <code>多环境</code> 对应的 <code>eurynome-cloud-environment.yaml</code> 配置中的 <code>herodotus.environment.logstash-server-addr</code> 属性的值，将其值设置成 <code>false</code> ，即可关闭日志收集功能，就解除服务对 <code>ELK</code> 的依赖</p></div><h4 id="_8-、运行skywalking-可选" tabindex="-1"><a class="header-anchor" href="#_8-、运行skywalking-可选" aria-hidden="true">#</a> [8]、运行Skywalking（可选）</h4><p>完整运行本套微服务架构，需要搭建 <code>ELK</code> 套件，作为日志中心以及<code>Skywalking</code>链路追踪的数据存储介质。正式环境运行建议使用 <code>Docker</code> 或 <code>K8S</code> 的方式运行 <code>Skywalking</code>，并以 <code>Docker</code> 的形式运行服务。</p><p>如果仅是在本地运行调试服务与 <code>Skywalking</code> 的联动，可以在IDE中增加参数后，再运行服务即可。</p><p>以IDEA为例，点开 <code>Edit Configurations...</code>，在对应服务的 <code>VM Options</code> 输入框中添加如下参数即可调试 <code>Skywalking</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-javaagent:D:/Workspaces/Java/herodotus-cloud/configurations/docker/context/agent/skywalking-agent-es7-8.6.0.jar<span class="token operator">=</span>agent.service_name<span class="token operator">=</span>herodotus-cloud-upms-ability,collector.backend_service<span class="token operator">=</span><span class="token number">192.168</span>.101.10:11800\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>操作界面如下图所示，IDEA版本不同配置方式会有差异</p><p><img src="/eurynome-cloud/images/idea/local-skywalking.jpeg" alt="输入图片说明"></p><h3 id="_10-、以docker方式部署-可选" tabindex="-1"><a class="header-anchor" href="#_10-、以docker方式部署-可选" aria-hidden="true">#</a> [10]、以Docker方式部署（可选）</h3>',17),Sn=(0,s.Uk)("参见："),Pn=(0,s.Uk)("容器化部署"),Ln=(0,s._)("h3",{id:"_11-、部署验证",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#_11-、部署验证","aria-hidden":"true"},"#"),(0,s.Uk)(" [11]、部署验证")],-1),wn=(0,s._)("p",null,[(0,s.Uk)("以上步骤完成之后，工程后端整体搭建部署完成。可以通过运行前端界面进行操作或者用 "),(0,s._)("code",null,"Postman"),(0,s.Uk)(" 调用接口的方式进行验证。")],-1),Cn=(0,s.Uk)("如果界面操作正常，或者接口调用正常，则说明工程已经正确部署。更多验证，参阅："),Kn=(0,s.Uk)("OAuth2授权标准"),Tn=(0,s._)("h2",{id:"前端运行",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#前端运行","aria-hidden":"true"},"#"),(0,s.Uk)(" 前端运行")],-1),In=(0,s._)("h3",{id:"_1-、检出代码",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#_1-、检出代码","aria-hidden":"true"},"#"),(0,s.Uk)(" [1]、检出代码")],-1),Wn=(0,s.Uk)("在合适位置上，使用Git检出前端工程代码。"),On={href:"https://gitee.com/herodotus/eurynome-cloud-ui",target:"_blank",rel:"noopener noreferrer"},Rn=(0,s.Uk)("项目地址"),Bn=(0,s.uE)('<h3 id="_2-、修改配置" tabindex="-1"><a class="header-anchor" href="#_2-、修改配置" aria-hidden="true">#</a> [2]、修改配置</h3><p>在前端工程 <code>${project_home}/packages/@herodotus/ui</code> 录下，找到 <code>.env.development</code> 或者 <code>.env.production</code> 文件。修改其中的参数</p><div class="custom-container tip"><p class="custom-container-title">参数说明</p><ul><li><strong>NODE_ENV</strong>：当前多环境名称</li><li><strong>VUE_APP_SYSTEM_NAME</strong>：界面显示的系统名称</li><li><strong>VUE_APP_GATEWAY</strong>：服务网关访问地址</li><li><strong>VUE_APP_PROJECT</strong>：地址切换名称。通过该参数以动态修改域名以外的地址，以实现单体版等使用同一套操作界面。<code>eurynome</code>指定是微服务版，其它任意值指定是单体版</li><li><strong>VUE_APP_OAUTH_CLIENT_ID</strong>：OAuth2 密码模式 Client Id。</li><li><strong>VUE_APP_OAUTH_CLIENT_SECRET</strong>：OAuth2 密码模式 Client 密码</li><li><strong>VUE_APP_OAUTH_GRANT_TYPE</strong>：OAuth2 授权模式</li><li><strong>VUE_APP_SECRET_KEY</strong>：前端关键信息 AES 加密秘钥</li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p><code>VUE_APP_SECRET_KEY</code> 秘钥，并不是本系统前后端数据加密传输使用的秘钥，只是对前端临时存储的关键信息加密的秘钥。</p><p>本系统前后端数据加密传输，是基于自主设计的自定义数据传输 Session，实现 AES 加密秘钥的动态生成、加密传输、一人一钥机制。每次使用系统都会动态重新生成，采用 RSA 前后端加密传输，临时存储至前端。缓存时间与 <code>OAuth 2 Token</code> 设置时间相同，正常退出系统后，会清除前端临时存储数据。</p><blockquote><p>并没有绝对安全的加密措施，前后端数据加密传输也仅仅是相对提升安全性。毕竟不管如何处理，前端都要存储一定的关键信息，而且前端是最容易破解的。正式环境使用还是要配合 <code>Https</code> 以及其它安全防护措施。</p></blockquote></div></div><h3 id="_3-、前端运行命令" tabindex="-1"><a class="header-anchor" href="#_3-、前端运行命令" aria-hidden="true">#</a> [3]、前端运行命令</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// 进入目录\n<span class="token builtin class-name">cd</span> eurynome-cloud-ui\n\n// 安装依赖\n<span class="token function">yarn</span> <span class="token function">install</span>\n\n// 如果要使用<span class="token variable"><span class="token variable">`</span>.env.development<span class="token variable">`</span></span>中的配置值，使用下面命令\n<span class="token function">yarn</span> e:ui dev\n\n// 如果要使用<span class="token variable"><span class="token variable">`</span>.env.production<span class="token variable">`</span></span>中的配置值，使用下面命令\n\n<span class="token function">yarn</span> e:ui prod\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_4-、运行验证" tabindex="-1"><a class="header-anchor" href="#_4-、运行验证" aria-hidden="true">#</a> [4]、运行验证</h3>',6),Mn=(0,s.Uk)("打开浏览器，输入："),Vn={href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},Gn=(0,s.Uk)("http://localhost:3000"),jn=(0,s.Uk)(" 默认账户/密码 system/123456"),qn=(0,s._)("p",null,"若能正确展示登录页面，并能成功登录，菜单及页面展示正常，则表明环境搭建成功",-1),Fn={render:function(n,a){const e=(0,s.up)("OutboundLink"),Fn=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("p",null,[(0,s._)("a",l,[o,(0,s.Wm)(e)])]),c,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("p",null,[p,(0,s._)("a",r,[i,(0,s.Wm)(e)]),d])]),u]),g,h,(0,s._)("p",null,[k,m,b,_,(0,s._)("a",v,[E,(0,s.Wm)(e)]),f,A,U]),x,(0,s._)("div",y,[N,(0,s._)("p",null,[D,S,P,(0,s.Wm)(Fn,{to:"/documents/%E6%9B%B4%E6%8D%A2%E6%95%B0%E6%8D%AE%E5%BA%93.html"},{default:(0,s.w5)((()=>[L])),_:1})])]),w,C,(0,s._)("div",K,[T,(0,s._)("p",null,[I,(0,s._)("a",W,[O,(0,s.Wm)(e)])])]),R,B,(0,s._)("ol",null,[(0,s._)("li",null,[(0,s._)("p",null,[M,V,G,(0,s._)("a",j,[q,(0,s.Wm)(e)]),F,Q,Y])]),H]),$,(0,s._)("ol",null,[(0,s._)("li",null,[(0,s._)("p",null,[z,J,Z,(0,s._)("a",X,[nn,(0,s.Wm)(e)]),an,en,sn])]),tn]),ln,(0,s._)("ol",null,[(0,s._)("li",null,[(0,s._)("p",null,[on,cn,pn,(0,s._)("a",rn,[dn,(0,s.Wm)(e)]),un,gn,hn])]),kn]),(0,s._)("div",mn,[bn,(0,s._)("p",null,[_n,vn,(0,s.Wm)(Fn,{to:"/documents/%E5%A4%9A%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html"},{default:(0,s.w5)((()=>[En])),_:1})])]),fn,(0,s._)("p",null,[An,(0,s.Wm)(Fn,{to:"/documents/%E5%A4%9A%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html"},{default:(0,s.w5)((()=>[Un])),_:1})]),xn,(0,s._)("p",null,[yn,(0,s.Wm)(Fn,{to:"/documents/%E6%95%B0%E6%8D%AE%E5%88%9D%E5%A7%8B%E5%8C%96.html"},{default:(0,s.w5)((()=>[Nn])),_:1})]),Dn,(0,s._)("p",null,[Sn,(0,s.Wm)(Fn,{to:"/microservices/%E5%AE%B9%E5%99%A8%E5%8C%96%E6%8A%80%E6%9C%AF.html"},{default:(0,s.w5)((()=>[Pn])),_:1})]),Ln,wn,(0,s._)("p",null,[Cn,(0,s.Wm)(Fn,{to:"/microservices/OAuth2%E6%8E%88%E6%9D%83%E6%A0%87%E5%87%86.html#%E6%A8%A1%E5%BC%8F%E9%AA%8C%E8%AF%81"},{default:(0,s.w5)((()=>[Kn])),_:1})]),Tn,In,(0,s._)("p",null,[Wn,(0,s._)("a",On,[Rn,(0,s.Wm)(e)])]),Bn,(0,s._)("p",null,[Mn,(0,s._)("a",Vn,[Gn,(0,s.Wm)(e)]),jn]),qn],64)}}}}]);