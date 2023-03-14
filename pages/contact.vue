<template lang="html">
    <div style="background-color: white;" class="about">
      <div class="container_xl postion-relative">
        <div>
          <nuxt-link class="service-back-btn" to="/"
            ><svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0383 5.43603C14.9729 5.42597 14.9066 5.42132 14.8403 5.42214H3.55262L3.79875 5.31368C4.03934 5.2058 4.25821 5.05897 4.44556 4.87985L7.61091 1.88098C8.02779 1.50395 8.09784 0.897436 7.7769 0.443911C7.40338 -0.039371 6.68706 -0.144304 6.17691 0.209574C6.1357 0.23818 6.09653 0.269362 6.05972 0.302916L0.335755 5.72582C-0.111572 6.14915 -0.111966 6.83586 0.334861 7.25965C0.335147 7.25993 0.335469 7.26023 0.335755 7.2605L6.05972 12.6834C6.5074 13.1064 7.23223 13.1054 7.6787 12.6813C7.71383 12.6479 7.74664 12.6124 7.7769 12.5749C8.09784 12.1214 8.02779 11.5149 7.61091 11.1379L4.45128 8.13359C4.28332 7.97429 4.09021 7.84072 3.87889 7.73772L3.53545 7.5913H14.7773C15.3621 7.61187 15.8752 7.22485 15.9851 6.68025C16.0863 6.08899 15.6624 5.53195 15.0383 5.43603Z"
                fill="#005BA8"
              />
            </svg>
            Back
          </nuxt-link>
        </div>
         <div class="contact">
         <div class="contact_img">
           <img width="100" src="../static/Img/contact.png" alt="">
         </div>
         <div>
         <h1 class="contact_title">Our Contacts</h1>
         <p class="contact_text">Feel free to write and call us. We really love to communicate with our clients.</p>
         </div>
         <div class="form">
            <div class="contact-info contact-web">
            <a class="contact-info" :href="`tel:${this.$store.state.staticInfo.nbm}`"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00501 11.9709C8.75501 12.6901 9.63417 13.2751 10.6058 13.6901L11.0383 13.8743L12.3675 12.5243C12.6975 12.1893 13.175 12.0443 13.6358 12.1409L16.8558 12.8151C17.4008 12.9309 17.79 13.4118 17.79 13.9684V16.2868C17.79 17.1159 17.1183 17.7876 16.2892 17.7876H15.5767C12.2983 17.7876 9.06334 16.7018 6.61667 14.5201C6.41501 14.3409 6.21917 14.1551 6.02834 13.9651L6.05917 13.9959C5.86834 13.8051 5.68334 13.6093 5.50417 13.4076C3.32167 10.9618 2.23584 7.72677 2.23584 4.44844V3.73594C2.23584 2.90677 2.90751 2.23511 3.73667 2.23511H6.05501C6.61167 2.23511 7.09251 2.62427 7.20834 3.16927L7.88334 6.38927C7.97917 6.84927 7.83501 7.32761 7.50001 7.65761L6.15001 8.98677L6.33417 9.41927C6.74917 10.3901 7.28501 11.2209 8.00501 11.9709Z"
                  stroke="black"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ this.$store.state.staticInfo.nbm }}</a
            >
            <a class="contact-info">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99832 17.7767C9.99832 17.7767 3.52832 13.8892 3.52832 8.70335C3.52832 5.12335 6.42999 2.22168 10.01 2.22168C13.59 2.22168 16.4917 5.12335 16.4917 8.70335C16.4917 13.8892 9.99832 17.7767 9.99832 17.7767Z"
                  stroke="black"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.01 11.2967C11.4418 11.2967 12.6025 10.136 12.6025 8.70418C12.6025 7.27238 11.4418 6.11168 10.01 6.11168C8.57819 6.11168 7.41749 7.27238 7.41749 8.70418C7.41749 10.136 8.57819 11.2967 10.01 11.2967Z"
                  stroke="black"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ this.$store.state.staticInfo.adres }}</a
            >
            <a class="contact-info" :href="`mailto:${this.$store.state.staticInfo.email}`"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.55914 5.7008L9.99997 12.0775L17.4408 5.7008M15.2775 15.5541H4.72247C3.34164 15.5541 2.22247 14.435 2.22247 13.0541V6.9458C2.22247 5.56497 3.34164 4.4458 4.72247 4.4458H15.2783C16.6591 4.4458 17.7783 5.56497 17.7783 6.9458V13.055C17.7775 14.435 16.6583 15.5541 15.2775 15.5541Z"
                  stroke="black"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ this.$store.state.staticInfo.email }}</a
            >
            <div class="brand-icons">
            <a
              target="_blank"
              v-if="this.$store.state.staticInfo.instagram"
              :href="this.$store.state.staticInfo.instagram"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0104 6.98988L17.0124 6.99116M10.7555 21.246H13.2445C16.0447 21.246 17.4449 21.246 18.5144 20.7011C19.4552 20.2217 20.2201 19.4568 20.6995 18.516C21.2445 17.4464 21.2445 16.0463 21.2445 13.246V10.7571C21.2445 7.95682 21.2445 6.55669 20.6995 5.48713C20.2201 4.54632 19.4552 3.78141 18.5144 3.30205C17.4449 2.75708 16.0447 2.75708 13.2445 2.75708H10.7555C7.95523 2.75708 6.5551 2.75708 5.48554 3.30205C4.54473 3.78141 3.77983 4.54632 3.30046 5.48713C2.75549 6.55669 2.75549 7.95682 2.75549 10.7571V13.246C2.75549 16.0463 2.75549 17.4464 3.30046 18.516C3.77983 19.4568 4.54473 20.2217 5.48554 20.7011C6.5551 21.246 7.95523 21.246 10.7555 21.246ZM15.665 12.0019C15.665 14.025 14.025 15.665 12.0019 15.665C9.97884 15.665 8.33882 14.025 8.33882 12.0019C8.33882 9.97882 9.97884 8.3388 12.0019 8.3388C14.025 8.3388 15.665 9.97882 15.665 12.0019Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a
              target="_blank"
              v-if="this.$store.state.staticInfo.facebook"
              :href="this.$store.state.staticInfo.facebook"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.002 21.2854C17.1301 21.2854 21.2874 17.1286 21.2874 12.001C21.2874 6.87333 17.1301 2.71655 12.002 2.71655C6.87377 2.71655 2.71655 6.87333 2.71655 12.001C2.71655 17.1286 6.87377 21.2854 12.002 21.2854ZM12.002 21.2854V13.2199M15.9806 7.62934L15.8433 7.58922C13.923 7.02819 12.002 8.46828 12.002 10.4688V13.2199M12.002 13.2199H15.3056M12.002 13.2199H9.30521"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a
              target="_blank"
              v-if="this.$store.state.staticInfo.linked_in"
              :href="this.$store.state.staticInfo.linked_in"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.27843 16.7856V10.7747M11.5141 16.7856V15.1039M11.5141 15.1039V10.7747M11.5141 15.1039C11.5141 14.0447 12.1322 10.7747 14.2876 10.7747C15.6341 10.7747 16.7256 11.8662 16.7256 13.2127V16.7856M7.27466 7.21533L7.27674 7.21661M18.332 21.332H5.66797C4.01097 21.332 2.66797 19.989 2.66797 18.332V5.66797C2.66797 4.01097 4.01097 2.66797 5.66797 2.66797H18.332C19.989 2.66797 21.332 4.01097 21.332 5.66797V18.332C21.332 19.989 19.989 21.332 18.332 21.332Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          </div>

            <div class=" formDiv ">
                <el-form
                label-position="top"
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="120px"
                class="demo-ruleForm"
                action="">

                <div class="form-block calculator-grid">
                    <div class="d-flex flex-column">
                    <el-form-item label="Your name" prop="first_name" label-position="top">
                        <el-input
                        type="text"
                        class="w-100"
                        v-model="ruleForm.first_name"
                        placeholder="Name"
                        />
                    </el-form-item>
                    </div>
                </div>

                <div class="form-block calculator-grid">
                    <div class="d-flex flex-column">
                    <el-form-item label="Email" prop="email" label-position="top">
                        <input
                        type="text"
                        class="w-100"
                        v-model="ruleForm.email"
                        placeholder="Email"
                        />
                    </el-form-item>
                    </div>
                </div>

                <div class="form-block calculator-grid">
                    <div class="d-flex flex-column">
                    <el-form-item label="Phone" prop="nmb" label-position="top">
                        <the-mask
                        class="w-100"
                        type="text"
                        placeholder="(224) 300-5367"
                        :mask="['(###) ###-####', '(###) ###-####']"
                        v-model="ruleForm.nmb"
                        label-position="top"
                        />
                    </el-form-item>
                    </div>
                </div>

                <div class="form-block calculator-grid">
                    <div class="d-flex flex-column " >
                    <el-form-item label="Subject" style="margin-left: -10px; margin-right: 7px"  prop="subject" label-position="top">
                        <el-select style="width:100%; " v-model="ruleForm.subject" class="m-2" placeholder="Select" size="large">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                    </el-form-item>
                    </div>
                </div>

                <div class="form-block calculator-grid">
                    <div class="d-flex flex-column">
                    <el-form-item  prop="commit" label-position="top">
                        <el-input placeholder="Your comments" v-model="ruleForm.commit" type="textarea" />
                    </el-form-item>
                    </div>
                </div>
                <el-form-item>
                <el-button type="primary" @click="onSubmit('ruleForm')">Create</el-button>
                </el-form-item>
                </el-form>
            </div>
         
         </div>

         </div>
        <div>
          
        </div>
          
      </div>
    </div>
</template>
<script>
import moment from "moment";
export default {
    data(){
    return{
        ruleFormRef:null,
        ruleForm:{
           first_name: '',
           email: '',
           nmb: '',
           subject: '',
           commit: '',
        },
        options: [
        {
            value: 'Select',
            label: 'Select',
        },
        {
            value: '0',
            label: 'I want a free quote',
        },
        {
            value: '1',
            label: 'I have an existing order',
        },
        {
            value: '2',
            label: 'I want to book a shipment',
        },
        {
            value: '3',
            label: 'Other questions',
        },
        ],
        rules:{
        first_name: [
            { required: true, message: 'Required field', trigger: 'blur' }
        ],
        email: [
                {
                required: true,
                message: 'Please input email address',
                trigger: 'blur',
                },
                {
                type: 'email',
                message: 'Please input correct email address',
                trigger: ['blur', 'change'],
                },
            ],
          nmb: [
                { required: true,min: 10, message: 'Required field', trigger: 'blur' }
                ],
        subject: [
            {
            required: true,
            message: 'Please select Activity subject',
            trigger: 'change',
            },
        ],
        commit: [
            { required: true, message: 'Please input activity form', trigger: 'blur' },
        ],
        }
    }
    },
 methods:{
 moment,

async  onSubmit(ruleForm){
    this.$refs[ruleForm].validate( async (valid) => {
    if (valid) {
        try {
           const res = await this.$axios.$post(`/application/create`,
           {
            name: this.ruleForm.first_name,
            email: this.ruleForm.email,
            nmb: '+'+ this.ruleForm.nmb,
            subject: this.ruleForm.subject,
            commit: this.ruleForm.commit,
          });
           this.ruleForm.first_name ='',
           this.ruleForm.email = '',
           this.ruleForm.nmb = '',
           this.ruleForm.subject ='',
           this.ruleForm.commit = ''
        } catch (error) {

        }
        
    } else {
      console.log('error submit!')
    }
  })
},


 }

}
</script>
<style scoped lang="scss">
.el-input__inner{
    width: 100% !important;
}
.form{
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    align-items: center;
}
.formDiv{
    width: 500px;
}
.contact{
    background-color: white;
    padding: 20px;
    &_img{
        display: flex;
        justify-content: center;
    }
    &_title{
        font-family: 'Mulish' sans-serif;
        font-size: 42px;
        color: black;
        text-align: center;
    }
    &_text{
        font-family: 'Mulish' sans-serif;
        font-size: 20px;
        color: black;
        text-align: center;
    }
}
.contact-info{
    color: black;
    font-size: 20px;
    &:hover{

        color: #1890ff;
    }
}

@media(max-width:800px){
.form{
 flex-direction: column;
}
}
@media(max-width:600px){
.formDiv{
    width: 350px;
}
.contact{
    padding: 15px;
    &_img{
        display: flex;
        justify-content: center;
    }
    &_title{
        font-size: 32px;
    }
    &_text{
        font-size: 16px;
    }
}
.contact-info{
    font-size: 16px;
}
}
</style>