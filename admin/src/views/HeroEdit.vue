<template>
  <div class="about">
    <h1>{{id? "编辑":"新建"}}英雄</h1>
    <el-form label-width="120px" @submit.native.prevent="save">

      <el-tabs type="border-card" value="base">
        <el-tab-pane label="基础信息" name="base">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>

          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>

          <el-form-item label="头像">
            <el-upload class="avatar-uploader" :action="uploadURL" :headers='getToken()' :show-file-list="false" :on-success="res => $set(model,'avatar', res.url)">
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="角色背景">
            <el-upload class="avatar-uploader" :action="uploadURL" :headers='getToken()' :show-file-list="false" :on-success="res => $set(model,'banner', res.url) ">
              <img v-if="model.banner" :src="model.banner" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option v-for="item in categories" :key="item._id " :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="分数">
            <el-rate v-model="model.scores.difficult" :max="9" style="margin-top:0.7rem;" show-score></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate v-model="model.scores.skills" :max="9" style="margin-top:0.7rem;" show-score></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate v-model="model.scores.attack" :max="9" style="margin-top:0.7rem;" show-score></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate v-model="model.scores.survive" :max="9" style="margin-top:0.7rem;" show-score></el-rate>
          </el-form-item>

          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <ElOption v-for="item in items" :key="item._id " :label="item.name" :value="item._id"></ElOption>
            </el-select>
          </el-form-item>

          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <ElOption v-for="item in items" :key="item._id " :label="item.name" :value="item._id"></ElOption>
            </el-select>
          </el-form-item>

          <el-form-item label="使用技巧">
            <el-input v-model="model.usageTips" type="textarea"></el-input>
          </el-form-item>

          <el-form-item label="对抗技巧">
            <el-input v-model="model.battleTips" type="textarea"></el-input>
          </el-form-item>

          <el-form-item label="团战思路">
            <el-input v-model="model.teamTips" type="textarea"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button @click="model.skills.push({})" size="small"><i class="el-icon-plus"></i> 添加技能</el-button>
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" v-for="(item,i) in model.skills" :key="i">

              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>

              <el-form-item label="图标">
                <el-upload class="avatar-uploader" :action="uploadURL" :headers='getToken()' :show-file-list="false" :on-success="res => $set(item,'icon',res.url)">
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <el-form-item label="冷却值">
                <el-input v-model="item.delay"></el-input>
              </el-form-item>

              <el-form-item label="消耗">
                <el-input v-model="item.cost"></el-input>
              </el-form-item>

              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>

              <el-form-item label="小提示">
                <el-input type="textarea" v-model="item.tips"></el-input>
              </el-form-item>

              <el-form-item label="">
                <el-button type="danger" @click="model.skills.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>

        <el-tab-pane label="最佳搭档" name="partners">
          <el-button @click="model.partners.push({})" size="small"><i class="el-icon-plus"></i> 添加英雄</el-button>
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" v-for="(item,i) in model.partners" :key="i">

              <el-form-item label="名称">
                <el-select filterable v-model="item.hero">
                  <el-option v-for="hero in heroes" :key="hero._id" :value="hero._id" :label="hero.name"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>

              <el-form-item label="">
                <el-button type="danger" @click="model.partners.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>

      <el-form-item style="margin-top:1rem">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      items: [],
      heroes: [],
      categories: [],
      model: {
        name: "",
        avatar: "",
        scores: {
          difficult: 0
        },
        skills: [],
        partners: []
      }
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/heroes/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/heroes", this.model);
      }
      this.$router.push("/heroes/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/heroes/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    },
    async fetchItems() {
      const res = await this.$http.get(`rest/items`);
      this.items = res.data;
    },
    async fetchHeroes() {
      const res = await this.$http.get(`rest/heroes`);
      this.heroes = res.data;
    }
  },
  created() {
    this.fetchCategories();
    this.fetchItems();
    this.fetchHeroes();
    this.id && this.fetch();
  }
};
</script>
<style>
</style>