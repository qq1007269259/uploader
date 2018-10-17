$(function(){

  $('#drag-and-drop-zone').dmUploader({ //
    url: 'backend/upload.php',
    maxFileSize: 3000000, // 3 Megs 
    extFilter: ["jpg","jpe","png","gif"],
    onDragEnter: function(){
      // Happens when dragging something over the DnD area
      this.addClass('active');
    },
    onDragLeave: function(){
      // Happens when dragging something OUT of the DnD area
      this.removeClass('active');
    },
    onInit: function(){
      // Plugin is ready to use
      ui_add_log('准备成功', 'info');
    },
    onComplete: function(){
      // All files in the queue are processed (success or error)
      // 处理队列中的所有文件(成功或错误)
      ui_add_log('所有未完成的转换完成');
    },
    onNewFile: function(id, file){
      // When a new file is added using the file selector or the DnD area
      ui_add_log('将要添加的文件' + id);
      ui_multi_add_file(id, file);
    },
    onBeforeUpload: function(id){
      // about tho start uploading a file
      ui_add_log('开始上传 #' + id);
      ui_multi_update_file_status(id, 'uploading', 'Uploading...');
      ui_multi_update_file_progress(id, 0, '', true);
    },
    onUploadCanceled: function(id) {
      // Happens when a file is directly canceled by the user.
      ui_multi_update_file_status(id, 'warning', 'Canceled by User');
      ui_multi_update_file_progress(id, 0, 'warning', false);
    },
    onUploadProgress: function(id, percent){
      // Updating file progress
      ui_multi_update_file_progress(id, percent);
    },
    onUploadSuccess: function(id, data){
      // A file was successfully uploaded
      ui_add_log('文件信息' + id + ': ' + JSON.stringify(data));
      ui_add_log('上传文件的id为' + id , 'success');
      ui_multi_update_file_status(id, 'success', '上传成功');
      ui_multi_update_file_progress(id, 100, 'success', false);
    },
    onUploadError: function(id, xhr, status, message){
      ui_multi_update_file_status(id, 'danger', message);
      ui_multi_update_file_progress(id, 0, 'danger', false);  
    },
    onFallbackMode: function(){
      // When the browser doesn't support this plugin :(
      ui_add_log('插件不能在这里使用，运行回退回调', 'danger');
    },
    onFileSizeError: function(file){
      ui_add_log('File \'' + file.name + '\' 无法添加：大小超出限制', 'danger');
    },
    onFileExtError: function(file){
      alert('文件类型错误');
    }
  });
});