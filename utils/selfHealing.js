export async function getFirstLocator(locators, timeout = 15000) {
    for (const locator of locators) {
        try {
            await locator.waitFor({ state: 'visible', timeout });
            return locator;
        } catch {
            // Try the next candidate locator if the current one is not visible yet.
        }
    }

    throw new Error('No visible locator found');
}