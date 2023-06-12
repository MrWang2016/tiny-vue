import { test, expect } from '@playwright/test';

test('主题样式', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull());
    await page.goto('http://localhost:7130/pc/link/link-style');
    const preview = page.locator('#preview');
    let anchor = preview.locator('a').filter({ hasText: '默认链接' });
    await anchor.hover();
    await expect(anchor).toHaveCSS('color', 'rgb(82, 110, 204)');
    anchor = preview.locator('a').filter({ hasText: '主要链接' });
    await anchor.hover();
    await expect(anchor).toHaveCSS('color', 'rgb(118, 147, 245)');
    anchor = preview.locator('a').filter({ hasText: '成功链接' });
    await anchor.hover();
    await expect(anchor).toHaveCSS('color', 'rgb(172, 242, 220)');
    anchor = preview.locator('a').filter({ hasText: '警告链接' });
    await anchor.hover();
    await expect(anchor).toHaveCSS('color', 'rgb(250, 194, 10)');
    anchor = preview.locator('a').filter({ hasText: '危险链接' });
    await anchor.hover();
    await expect(anchor).toHaveCSS('color', 'rgb(214, 74, 82)');
    anchor = preview.locator('a').filter({ hasText: '信息链接' });
    await anchor.hover();
    await expect(anchor).toHaveCSS('color', 'rgb(92, 97, 115)');
})