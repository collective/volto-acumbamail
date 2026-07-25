/**
 * Unit tests for settings module.
 * @module config/settings.test
 */

import install from './settings';

jest.mock('volto-acumbamail/icons/envelope-at.svg', () => 'envelope-at.svg', {
  virtual: true,
});

const createMockConfig = (controlPanelsIcons = {}) => ({
  settings: {
    controlPanelsIcons,
  },
});

describe('install (settings)', () => {
  it('returns the config object', () => {
    const config = createMockConfig();
    const result = install(config);
    expect(result).toBe(config);
  });

  it('adds the acumbamail-settings icon to controlPanelsIcons', () => {
    const config = createMockConfig();
    install(config);
    expect(config.settings.controlPanelsIcons).toHaveProperty(
      'acumbamail-settings',
    );
  });

  it('sets acumbamail-settings icon to the imported SVG', () => {
    const config = createMockConfig();
    install(config);
    expect(config.settings.controlPanelsIcons['acumbamail-settings']).toBe(
      'envelope-at.svg',
    );
  });

  it('preserves existing controlPanelsIcons entries', () => {
    const existingIcon = 'existing-icon.svg';
    const config = createMockConfig({ 'existing-panel': existingIcon });
    install(config);
    expect(config.settings.controlPanelsIcons['existing-panel']).toBe(
      existingIcon,
    );
    expect(config.settings.controlPanelsIcons).toHaveProperty(
      'acumbamail-settings',
    );
  });

  it('does not remove other controlPanelsIcons entries', () => {
    const config = createMockConfig({
      'panel-a': 'icon-a.svg',
      'panel-b': 'icon-b.svg',
    });
    install(config);
    expect(Object.keys(config.settings.controlPanelsIcons)).toEqual(
      expect.arrayContaining(['panel-a', 'panel-b', 'acumbamail-settings']),
    );
  });
});
