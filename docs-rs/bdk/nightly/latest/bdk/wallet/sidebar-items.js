window.SIDEBAR_ITEMS = {"enum":[["AddressIndex","The address index selection strategy to use to derived an address from the wallet’s external descriptor. See [`Wallet::get_address`]. If you’re unsure which one to use use `WalletIndex::New`."],["InsertTxError","An error that may occur when inserting a transaction into [`Wallet`]."],["LoadError","The error type when loading a [`Wallet`] from persistence."],["NewError","The error type when constructing a fresh [`Wallet`]."],["NewOrLoadError","Error type for when we try load a [`Wallet`] from persistence and creating it if non-existant."]],"fn":[["wallet_name_from_descriptor","Deterministically generate a unique name given the descriptors defining the wallet"]],"mod":[["coin_selection","Coin selection"],["export","Wallet export"],["signer","Generalized signers"],["tx_builder","Transaction builder"]],"struct":[["AddressInfo","A derived address and the index it was found at. For convenience this automatically derefs to `Address`"],["Balance","Balance, differentiated into various categories."],["ChangeSet","The changes made to a wallet by applying an [`Update`]."],["Update","An update to [`Wallet`]."],["Wallet","A Bitcoin wallet"]],"trait":[["IsDust","Trait to check if a value is below the dust limit. We are performing dust value calculation for a given script public key using rust-bitcoin to keep it compatible with network dust rate"]]};