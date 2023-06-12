import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import IpAddress from '@opentiny/vue-ip-address'
import { nextTick } from 'vue'

let value = ''

describe('PC Mode', () => {
  const mount = mountPcMode
  
  test('readonly', async () => {
    const wrapper = mount(() => <IpAddress v-model={value} readonly={true}></IpAddress>)
    expect(wrapper.find('input').attributes()).toHaveProperty('readonly')
  })


  test('slot', async () => {
    const wrapper = mount(() => <IpAddress v-model={value} v-slots={{
      default: () => <i>--</i>
    }}></IpAddress>)
    expect(wrapper.find('i').text()).toBe('--')
  })

  test('events', async () => {
    const focus = vi.fn()
    const wrapper = mount(() => <IpAddress v-model={value} onFocus={focus}></IpAddress>)
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(focus).toHaveBeenCalled()
  })
})
