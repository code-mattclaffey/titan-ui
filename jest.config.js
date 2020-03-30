module.export = {
    roots: ['<rootDir>/src'],
    transform: {
        '\\.(ts|tsx)?$': 'ts-jest',
    },
    testMatch: ['<rootDir>/src/**/>(*.)test.{ts, tsx}'], // finds test
    moduleFileExtensions: ['json', 'node', 'tsx', 'ts'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '@testing-library/react/cleanup-after-each',
    ],
};
