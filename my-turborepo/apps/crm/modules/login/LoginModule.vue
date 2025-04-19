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
  if (event.valid) {
    const { username, password } = event.values;
    try {
      const response = await $fetch(`${config.public.apiBase}/auth/login`, {
        body: {username, password},
        method: 'POST',
        // mode: 'no-cors',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        // responseType: 'json',
        onResponse({ request, response, options }) {
          console.log('Request:', request);
          console.log('Response:', response, typeof(response));
        }
      });
      console.log('response1', response);
    } catch (e) {
      console.error('errorFetch!!!', e);
    }
    // toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
  }
};

const onFormSubmitTest = async () => {
  try {
    const response = await $fetch(`${config.public.apiBase}/auth/profile`, {
      method: 'GET',
      // mode: 'no-cors',
    });
    console.log('response', response);
    result.value = response;
  } catch (e) {
    console.error('errorFetch', e);
  }
}
</script>