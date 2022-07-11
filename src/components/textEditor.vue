<!-- <template>
  <div class="example">
    <quill-editor
      class="editor"
      ref="myTextEditor"
      :value="description"
      :options="editorOption"
      @change="onEditorChange"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    />

  </div>
</template>

<script>
  import hljs from 'highlight.js'
  import debounce from 'lodash/debounce'
  import { quillEditor } from 'vue-quill-editor'
  // highlight.js style
  import 'highlight.js/styles/tomorrow.css'
  // import theme style
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  export default {
    name: 'quill-example-snow',
    title: 'Theme: snow',
    components: {
      quillEditor
    },
    data() {
      return {
        editorOption: {
          modules: {
            toolbar: [
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              ['bold', 'underline','italic', 'strike'],
              [ { 'list': 'bullet' }],
              ['link', 'image'],
              ['blockquote']
            ],
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            }
          }
        },
       
      }
    },
    methods: {
      onEditorChange: debounce(function(value) {
        this.content = value.html
      }, 466),
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      }
    },
    computed: {
      editor() {
        return this.$refs.myTextEditor.quill
      },
      contentCode() {
        return hljs.highlightAuto(this.content).value
      }
    },
    mounted() {
      console.log('this is Quill instance:', this.editor)
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    display: flex;
    flex-direction: column;
    .editor {
      height: 15rem;
      overflow: hidden;
    }
  }
</style> -->