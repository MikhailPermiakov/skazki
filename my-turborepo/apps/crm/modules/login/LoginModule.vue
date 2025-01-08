<template>
  <div class="card flex justify-center">
    <Form :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
      <FormField v-slot="$field" as="section" name="username" initialValue="" class="flex flex-col gap-2">
        <InputText type="text" placeholder="Username" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
      </FormField>
      <FormField v-slot="$field" asChild name="password" initialValue="">
        <section class="flex flex-col gap-2">
          <Password type="text" placeholder="Password" :feedback="false" toggleMask fluid />
          <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
        </section>
      </FormField>
      <Button type="submit" severity="secondary" label="Submit" />
      <Button severity="secondary" label="Submit-test" @click.prevent.stop="onFormSubmitTest" />
    </Form>
    <div>result: {{ result }}</div>
  </div>
</template>
<script setup lang="ts">
import { Form, FormField, FormSubmitEvent } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';
import { useAsyncData } from '#app';

const config = useRuntimeConfig();
const toast = useToast();
const state = ref();
const result = ref();

const resolver =  zodResolver(
  z.object({
    username: z.string().min(1, { message: 'Username is required.' }),
    password: z.string().min(1, { message: 'Password is required.' })
  })
);

const onFormSubmit = async (event: FormSubmitEvent) => {
  console.log('event', event);

  // if (valid) {
  //   toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
  // }
};

const onFormSubmitTest = async () => {
  try {
    const response = await $fetch(`${config.public.apiBase}`, {
      method: 'GET',
      mode: 'no-cors',
    });
    console.log('response', response);
  } catch (e) {
    console.error('errorFetch', e);
  }
}

watchEffect(()=> console.log('result', result))
</script>