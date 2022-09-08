<template>
  <div class="container mx-auto mt-4">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 w-52">年齢</label>
    <select v-model="features.Sex" class="select select-primary mb-4 w-52 float-left">
      <option>男性</option>
      <option>女性</option>
    </select>
    <br />
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 keep-all w-52">部屋のクラス</label>
    <select v-model="features.Pclass" class="select w-52 select-primary mb-4 float-left">
      <option>上層クラス（お金持ち）</option>
      <option>中級クラス（一般階級）</option>
      <option>下層クラス（労働階級）</option>
    </select>
    <br />
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 keep-all w-52">年齢</label>
    <select v-model="features.Age" class="select select-primary mb-4 mr-2 w-52">
      <option disabled selected>年齢は？</option>
      <option v-for="i in [...Array(121).keys()]" :key="i">
        {{ i }}
      </option></select
    >歳
    <br />
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 keep-all w-52">親・子同伴者数</label>
    <select v-model="features.Parch" class="select select-primary mb-4 mr-2 w-52">
      <option v-for="i in [...Array(11).keys()]" :key="i">
        {{ i }}
      </option>
    </select>
    人
    <br />
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 keep-all w-52"
      >兄弟姉妹同伴者数</label
    >
    <select v-model="features.SibSp" class="select select-primary mb-4 mr-2 w-52">
      <option v-for="i in [...Array(11).keys()]" :key="i">
        {{ i }}
      </option>
    </select>
    人
    <br />
    <button class="btn btn-primary" @click="displayOutput">結果を出力</button>
    <template v-if="survivalProbability !== undefined">
      <div class="alert alert-error mt-4">あなたの生存確率は {{ Math.round(survivalProbability) }} % です。</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Features } from '@/types';
import { ref, reactive, toRaw } from 'vue';
import axios from 'axios';
const features = reactive<Features>({
  Sex: '男性',
  Pclass: '中級クラス（一般階級）',
  Age: 18,
  Parch: 0,
  SibSp: 0,
});

const survivalProbability = ref<number | undefined>();

const displayOutput = (): void => {
  console.log(import.meta.env.VITE_DERIVE_ENDPOINT);

  const endPoint = import.meta.env.VITE_DERIVE_ENDPOINT;
  axios
    .post(endPoint, features)
    .then((response) => {
      survivalProbability.value = (100 * response.data.survival_probability) as number;
    })
    .catch(() => {
      alert('エラーが発生しました。');
    });
};
</script>
