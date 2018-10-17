# demo-config.js 中ui_中的方法都在 demo-ui.js

# DEMO

This page demostrates the most basic setup/config.

## Backend

By default this example uploads files using: <code>demo/backend/upload.php</code>. This piece of PHP logic is provided to upload the files to the <code>backend/files/</code> folder (make sure it has writing permissions).

This is only an example using PHP, of course you can use it with any other type of backend. 

And It's just to demonstrate the flow; the script returns a very basic JSON response  structure (again, this is for this example, you can implement this in any way you want):

### Success response:
```json
{
	"status": "ok",
	"path": "files/5a515f174dea7_Hot_Gril.jpg"
}
```

### Error response:
```json
{
	"status": "error",
	"message": "Exceeded filesize limit"
}
```


# Warning

This is a ***DEMO*** , the backend / PHP provided is very basic. You can use it as a starting point maybe, but ***do not use this on production***. It doesn't preform any server-side validation, checks, authentication, etc.

jQuery Ajax File Uploader小部件
一个用于使用ajax（同步）上传文件的jQuery插件; 包括对队列，进度跟踪和拖放的支持。

非常易于配置，易于适应任何前端设计，并且非常容易与任何后端逻辑一起工作。

重点将是现代浏览器，但也提供了一种方法来了解何时不支持该插件。我们的想法是保持简单轻便。

设置此插件需要基本的Javascript知识：如何设置设置，回调事件等。

轻量级：~8.00 KB
依赖关系：只是jQuery！
许可证：根据MIT许可证发布
建立状态 npm版本 凉亭版

直播DEMOS
在这里查看现场演示：https：//danielmg.org/demo/java-script/uploader

目录
安装
从v0.xx迁移
用法
标记
初始化
选项
回调
方法
安装
NPM
npm install dm-file-uploader --save
鲍尔
凉亭安装dm-file-uploader --save
下载tarball
您可以直接从发行版下载最新版本的tarball

混帐
git clone https://github.com/danielm/uploader.git
从v0.xx迁移
1.xx获得了很多更改和新功能，如果您是以前的版本用户阅读CHANGELOG.md，那么您可以找到更改或删除内容的具体详细信息。

用法
如演示中所示，有许多方法可以使用该插件，但基本概念是：

在任何HTML元素上初始化插件，例如：<div />提供拖放区域。
<input type="file"/>主区域元素内的所有内容也将被绑定。
您可以选择将其直接绑定到 <input />
示例标记
这是简单的html标记。文件输入是可选的，但它提供了另一种为用户选择文件的方法（查看在线演示以了解如何隐藏/设置样式）

< div  id = “ drop-area ” >
  < h3 >拖放文件< h3 />
  < input  type = “ file ”  title = “点击添加文件” >
</ div >
初始化
   < script  src = “ / path / to / jquery.dm-uploader.min.js ” > </ script >
$（“＃drop-area ”）。dmUploader（{
  url ： ' / path / to /backend / upload.asp '，
   // ...这里有更多设置......
  
  onInit ： function（）{
     console。log（' Callback：Plugin initialized '）;
  }
  
  // ...更多回调 
}）;
下面是所有可用选项和回调的详细列表。

此外，初始化后，您可以使用任何可用的方法与插件进行交互。

选项
queue：（boolean）Default true文件将逐个上传。

auto：（boolean）Default true文件将在添加后立即开始上传。如果使用queue系统，则此选项表示queue将在添加第一个文件后自动启动。

将此设置为false需要您使用API 方法手动启动上载。

dnd：（boolean）Default true启用拖放功能。

hookDocument：（boolean）Default true禁止在$（document）上删除文件。

这是防止浏览器在删除文件时重定向所必需的。

您可能想要禁用它的唯一原因是使用插件的多个实例时。如果是这种情况，您只需要使用一次。

multiple：（boolean）Default true允许用户同时选择或删除多个文件。

url :(字符串）Default document.URL用于处理文件上载的服务器URL（后端逻辑）。

method :(字符串）Default POST上传请求使用的HTTP方法。

extraData :(对象/函数）要在上载请求中添加的参数集合。

//示例 
extraData： {
    “ galleryid ”： 666 
}
如果您需要动态值，可以将其设置为a function。此外，如果此函数返回，则false不会添加任何内容。

//示例
extraData ： function（）{
    return {
      “ galleryid ”： $（ '＃gallery '）。val（）
   };
}
headers :( object）要在上载请求中发送的标头集合。

//示例 
标题： {
    ' X-CSRF-TOKEN '： $（ ' meta [name =“csrf-token”] '）。attr（ '内容'）
}
dataType :(字符串）Default null上载请求的响应类型。

默认值是null指jQuery将根据服务器返回的内容尝试“猜测”。

其他的值可以是：xml，json，script，html或者text

参考：http：//api.jquery.com/jquery.ajax/

fieldName :(字符串）Default 'file'我们“附加”文件的上传请求中的字段名称。

//例如在PHP中如果使用默认值，则可以使用以下命令访问该文件：
var_dump（ $ _FILES [ ' file ' ]）; 
// 'file'对应于此选项的值。
maxFileSize :(整数）Default 0文件验证：最大文件大小（以字节为单位）。零意味着没有限制。

maxFileSize ： 3000000  // 3 Megs
allowedTypes：（string）Default "*"文件验证：匹配文件mime-type的正则表达式。

allowedTypes ： “ image / * ”
extFilter：（array）Default null文件验证：允许的扩展数组。

extFilter ： [ “ jpg ”，“ jpeg ”，“ png ”，“ gif ” ]
回调
一般用途
onInit :(）Widget它可以使用了。

onFallbackMode :(）仅在插件不支持浏览器时触发。

onDragEnter :(）用户正在拖放区域上拖动文件。

onDragLeave :(）用户离开了区域。

删除文件时也会触发此操作。

onDocumentDragEnter :(）用户将文件拖到$（文档）上的任何位置

onDocumentDragLeave :(）用户离开了$（文档）区域。

删除文件时也会触发此操作。

onComplete :(）所有待处理文件都已完成。

仅适用于使用queue: true。见选项。

队列到达结束时触发（即使某些文件被取消或出现任何错误）。

文件回调
所有这些包括 id

id（字符串）：唯一ID。用于在后续回调中标识相同的文件。

onNewFile：（id，file）用户选择或删除了一个新文件。

file （对象）：文件对象，用它来访问文件详细信息，如名称，大小等。

供参考，请点击此处。

如果添加了多个，则会多次调用它。

文件验证已经执行。

如果提供了返回值=== false，则窗口小部件将忽略该文件。

使用此返回值来实现您自己的验证器。

onBeforeUpload：（id）即将执行上传请求。

onUploadProgress：（id，percent）获得该文件的新上传百分比

percent （整数）：0-100

onUploadSuccess：（id，data）文件已成功上传，并从服务器获得响应

data（对象）：上传请求响应。此参数的对象类型取决于：dataType

查看更多的选项。

onUploadError：（id，xhr，status，errorThrown）上传请求期间发生错误。

xhr （object）：XMLHttpRequest

status （整数）：错误类型，例如：“timeout”，“error”，“abort”和“parsererror”

errorThrown（字符串）：只有当HTTP错误发生：Not Found，Bad Request，等。

参考：http：//api.jquery.com/jquery.ajax/

onUploadComplete：（id）文件上传完成。

这会在onUploadSuccess或之后触发onUploadError。在这两种情况下。

onUploadCanceled：（id）上传已被用户取消。

当使用其中一种API方法取消上传时触发此操作。

了解更多方法。

验证回调
onFileTypeError :( file）文件类型验证失败。

使用设置时触发：allowedTypes。

查看更多的选项。

onFileSizeError :( file）文件大小验证失败。

使用设置时触发：maxFileSize。

查看更多的选项。

onFileExtError :( file）文件扩展名验证失败。

使用设置时触发：extFilter。

查看更多的选项。

方法
您可以使用一些方法与窗口小部件进行交互，其中一些行为可能取决于设置。

start：（id）开始上传。（id是可选的）

根据具体情况，此方法可能会：

如果id已提供并且没有正在queue运行，则开始上载单个文件。
重试失败或以前取消的文件。
如果auto设置为启动队列false，则不id提供
如果queue设置为false，则启动所有挂起的文件false
例：

$（“＃drop-area ”）。dmUploader（“ start ”，id）;
取消：（id）取消上传。（id是可选的）

根据具体情况，此方法可能会：

如果id提供了，则取消当前正在上传的文件。
如果未id提供，则取消所有当前正在上传的文件。
取消待处理的文件，queueif使用该选项将跳过它
queue如果使用该选项以及所有当前上载，请停止当前。
例：

$（“＃drop-area ”）。dmUploader（“取消”，id）;
reset :(）重置插件

停止所有上传
删除所有文件
重置队列
例：

$（“＃drop-area ”）。dmUploader（“ reset ”）;
destroy :(）销毁所有插件数据

停止所有上传
删除所有文件
释放所有事件，包括hookDocumentif使用该选项时使用的事件
例：

//示例
$（ “＃drop-area ”）。dmUploader（ “ destroy ”）;
