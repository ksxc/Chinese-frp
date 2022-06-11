<template>
  <div>
    <el-table :data="proxies" :default-sort="{prop: 'name', order: 'ascending'}" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-popover
            ref="popover4"
            placement="right"
            width="600"
  		  style="margin-left:0px"
            trigger="click">
            <my-traffic-chart :proxy_name="props.row.name"></my-traffic-chart>
          </el-popover>
  
          <el-button v-popover:popover4 type="primary" size="small" icon="view" style="margin-bottom:10px">流量图</el-button>
  
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="Name">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="协议">
              <span>{{ props.row.type }}</span>
            </el-form-item>
            <el-form-item label="域">
              <span>{{ props.row.custom_domains }}</span>
            </el-form-item>
            <el-form-item label="子域名">
              <span>{{ props.row.subdomain }}</span>
            </el-form-item>
            <el-form-item label="加密">
              <span>{{ props.row.encryption }}</span>
            </el-form-item>
            <el-form-item label="压缩">
              <span>{{ props.row.compression }}</span>
            </el-form-item>
            <el-form-item label="开始时间">
              <span>{{ props.row.last_start_time }}</span>
            </el-form-item>
            <el-form-item label="最后时间">
              <span>{{ props.row.last_close_time }}</span>
            </el-form-item>
        </el-form>
    </template>
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name"
      sortable>
    </el-table-column>
    <el-table-column
      label="外网端口"
      prop="port"
      sortable>
    </el-table-column>
    <el-table-column
      label="连接"
      prop="conns"
      sortable>
    </el-table-column>
    <el-table-column
      label="入"
      prop="traffic_in"
      :formatter="formatTrafficIn"
      sortable>
    </el-table-column>
    <el-table-column
      label="出"
      prop="traffic_out"
      :formatter="formatTrafficOut"
      sortable>
    </el-table-column>
    <el-table-column
      label="状态"
      prop="状态"
      sortable>
      <template slot-scope="scope">
        <el-tag type="success" v-if="scope.row.状态 === 'online'">{{ scope.row.状态 }}</el-tag>
        <el-tag type="danger" v-else>{{ scope.row.状态 }}</el-tag>
      </template>
    </el-table-column>
</el-table>

</div>
</template>

<script>
  import Humanize from 'humanize-plus';
  import Traffic from './Traffic.vue'
  import {
    HttpsProxy
  } from '../utils/proxy.js'
  export default {
    data() {
      return {
        proxies: new Array(),
        vhost_https_port: '',
        subdomain_host: ''
      }
    },
    created() {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      formatTrafficIn(row, column) {
        return Humanize.fileSize(row.traffic_in)
      },
      formatTrafficOut(row, column) {
        return Humanize.fileSize(row.traffic_out)
      },
      fetchData() {
        fetch('../api/serverinfo', {credentials: 'include'})
          .then(res => {
            return res.json()
          }).then(json => {
            this.vhost_https_port = json.vhost_https_port
            this.subdomain_host = json.subdomain_host
            if (this.vhost_https_port == null || this.vhost_https_port == 0) {
              return
            } else {
              fetch('../api/proxy/https', {credentials: 'include'})
                .then(res => {
                  return res.json()
                }).then(json => {
                  this.proxies = new Array()
                  for (let proxyStats of json.proxies) {
                    this.proxies.push(new HttpsProxy(proxyStats, this.vhost_https_port, this.subdomain_host))
                  }
                })
            }
          })
      }
    },
    components: {
        'my-traffic-chart': Traffic
    }
  }
</script>

<style>
</style>
