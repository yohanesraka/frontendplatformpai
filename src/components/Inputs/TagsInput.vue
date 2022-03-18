<template>
  <div class="tags-input__wrapper">
    <el-tag
      v-for="tag in dynamicTags"
      :key="tag"
      size="small"
      :type="tagType"
      :closable="true"
      :close-transition="false"
      @close="handleClose(tag)"
    >
      {{ tag }}
    </el-tag>

    <input
      ref="saveTagInput"
      v-model="inputValue"
      class="form-control"
      v-bind="$attrs"
      @input="onInput"
      @keyup.enter.prevent="handleInputConfirm"
      @blur="handleInputConfirm"
    />
  </div>
</template>

<script>
import { ElTag } from 'element-plus';

export default {
  name: 'TagsInput',
  components: {
    [ElTag.name]: ElTag,
  },
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Array,
      default: () => [],
      description: 'List of tags',
    },
    tagType: {
      type: String,
      default: 'primary',
      description: 'Tag type (primary|danger etc)',
    },
  },
  emits: ['change', 'input'],
  data() {
    return {
      dynamicTags: ['BUCHAREST', 'IASI', 'TIMISOARA'],
      inputVisible: false,
      inputValue: '',
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      this.$emit('change', this.dynamicTags);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      const { inputValue } = this;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
        this.$emit('change', this.dynamicTags);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    onInput(evt) {
      this.$emit('input', evt.target.value);
    },
  },
};
</script>
