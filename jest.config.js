module.export = {
    roots: ['<rootDir>/src'],
    transform: {
        '\\.(ts|tsx)?$': 'ts-jest',
    },
    testMatch: ['<rootDir>/src/**/>(*.)test.{ts, tsx}'], // finds test
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '@testing-library/react/cleanup-after-each',
    ],
};
