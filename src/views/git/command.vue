<template>
  <div>
    <h2>分支管理</h2>
    <div>
      git branch -l :查看本地分支
      <br />
      git branch -r :查看远程分支
      <br />
      git branch -a :查看全部分支（远程的和本地的）
      <br>
      git checkout 分支名：切换分支
      <br>
      git branch 分支名：创建本地分支
      <br>
      git checkout -b 分支名：从已有的分支创建新的分支
      <br>
      git branch -d 分支名：删除本地分支
      <p>如果想把本地的某个分支test提交到远程仓库，并作为远程仓库的master分支，或者作为另外一个名叫test的分支，那么可以这么做。</p>
      
      $ git push origin test:master // 提交本地test分支作为远程的master分支<br>
      $ git push origin test:test // 提交本地test分支作为远程的test分支
      <p>如果想删除远程的分支呢？类似于上面，如果:左边的分支为空，那么将删除:右边的远程的分支。</p>
      $ git push origin :test // 刚提交到远程的test将被删除，但是本地还会保存的，不用担心
      <p>创建分支的上游分支（跟踪分支）</p>
      git branch --set-upstream-to=origin/xinjiang-dev xinjiang-dev
    </div>
    <h2>查看远程仓库地址</h2>
    <p>
      git remote -v
    </p>
    <h2>查看远程仓库地址</h2>
    <p>
      git remote -v
    </p>
    
    
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
