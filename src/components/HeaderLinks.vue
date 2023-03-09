<script setup>
</script>

<template>
  <q-toolbar class="container q-py-lg" v-if="$q.screen.width > 1024">
    <q-img
      class="cursor-pointer"
      src="/images/preflight-logo-indigo.svg"
      spinner-color="primary"
      spinner-size="32px"
      width="160px"
      @click="$router.push('/')"
    />

    <q-toolbar-title class="q-pl-xl q-ml-xl">
      <q-item class="text-secondary">
        <q-item-section class>
          <q-btn-dropdown
            color="secondary"
            label="Product"
            flat
            dropdown-icon="expand_more"
            dense
            no-caps
          >
            <q-list class="q-ma-sm">
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-icon name="lightbulb" color="primary" />

                </q-item-section>
                <q-item-section>
                  <q-item-label>How Preflight works</q-item-label>
                  <q-item-label caption>Take a tour of Preflight. Learn how to record and</q-item-label>
                  <q-item-label caption>manage tests.</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-img
                    src="/images/click.svg"
                    spinner-color="primary"
                    width="25px"
                    spinner-size="20px"
                  />

                </q-item-section>
                <q-item-section>
                  <q-item-label>Recording Tests</q-item-label>
                  <q-item-label caption>See how creating even advanced tests is</q-item-label>
                  <q-item-label caption>dramatically easier with Preflight.</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-icon name="folder_copy" color="primary" />

                </q-item-section>
                <q-item-section>
                  <q-item-label>Running tests</q-item-label>
                  <q-item-label caption>Run tests manually, schedule them or incorporate</q-item-label>
                  <q-item-label caption>them into your development workflow.</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-icon name="grid_view" color="primary" />

                </q-item-section>
                <q-item-section>
                  <q-item-label>Integrations</q-item-label>
                  <q-item-label caption>Preflight works in your existing workflow for</q-item-label>
                  <q-item-label caption>notifications and development pipeline.</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-item-section>

        <q-item-section class>
          <q-btn-dropdown
            color="secondary"
            label="Solutions"
            flat
            dropdown-icon="expand_more"
            no-caps
          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-icon name="checklist" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>End to end Testing</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-icon name="settings" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Automated Regression Testing</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-icon name="desktop_windows" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Automate Software Testing</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-icon name="folder_copy" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Cross Browser Testing</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-icon name="language" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Automated Web Testing</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-icon name="science" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Unit Testing</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>
        </q-item-section>

        <q-item-section class>
          <q-btn-dropdown
            color="secondary"
            label="Compare to"
            flat
            dropdown-icon="expand_more"
            no-caps
          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar square size="30px" font-size="16px" class="text-bold" color="positive" text-color="white" >
                    <div>Se</div>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Selenium</q-item-label>
                  <q-item-label caption>Selenium is a popular open-source web testing tool</q-item-label>
                  <q-item-label caption>but has limitations that slow down testing.</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-item-section>

        <q-item-section class>
          <q-btn-dropdown
            color="secondary"
            label="Resources"
            flat
            dropdown-icon="expand_more"
            no-caps
          >
            <q-list class="q-ma-sm">
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-icon name="support" color="primary" />

                </q-item-section>
                <q-item-section>
                  <q-item-label>Help Center</q-item-label>
                  <q-item-label caption>Get all of your questions answered in our help</q-item-label>
                  <q-item-label caption>center, or contact support.</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-icon name="bookmark_border" color="primary" />

                </q-item-section>
                <q-item-section>
                  <q-item-label>Documentation</q-item-label>
                  <q-item-label caption>Learn how to get the most out of Preflight.</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-item-section>

        <q-item-section class>
          <q-btn color="secondary" label="Pricing" flat no-caps />
        </q-item-section>

        <q-item-section class>
          <q-btn color="secondary" label="Blog" flat no-caps />
        </q-item-section>

        <q-item-section class>
          <q-btn color="primary" label="Login" flat no-caps />
        </q-item-section>

        <q-item-section class>
          <q-btn color="primary" class="text-bold" label="Book a Demo" no-caps unelevated />
        </q-item-section>
      </q-item>
    </q-toolbar-title>
  </q-toolbar>
  <q-toolbar class="container q-py-lg" v-else>
    <q-img
      class="cursor-pointer"
      src="/images/preflight-logo-indigo.svg"
      spinner-color="primary"
      spinner-size="32px"
      width="160px"
      @click="$router.push('/')"
    />
    <q-space />
    <q-toolbar-title>
      <q-btn color="secondary" flat icon="menu">
        <q-menu>
          <q-list style="min-width: 300px">
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-icon name="lightbulb" color="primary" />
              </q-item-section>
              <q-item-section>How Preflight Works</q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-img
                  src="/images/click.svg"
                  spinner-color="primary"
                  width="25px"
                  spinner-size="20px"
                />
              </q-item-section>
              <q-item-section>Recording Tests</q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-icon name="folder_copy" color="primary" />
              </q-item-section>
              <q-item-section>Running Tests</q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-icon name="grid_view" color="primary" />
              </q-item-section>
              <q-item-section>Integrations</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar square size="30px" font-size="16px" class="text-bold" color="positive" text-color="white" >
                  <div>Se</div>
                </q-avatar>
              </q-item-section>
              <q-item-section>Compare to Selenium</q-item-section>
            </q-item>
            <q-separator />
            <div class="row">
              <q-item class="col-6" clickable v-close-popup>
                <q-item-section>Pricing</q-item-section>
              </q-item>
              <q-item class="col-6" clickable v-close-popup>
                <q-item-section>Documentation</q-item-section>
              </q-item>
              <q-item class="col-6" clickable v-close-popup>
                <q-item-section>Help Center</q-item-section>
              </q-item>
              <q-item clickable v-close-popup class="col-6">
                <q-item-section>Privacy</q-item-section>
              </q-item>
              <q-item clickable v-close-popup class="col-6">
                <q-item-section>Terms</q-item-section>
              </q-item>
              <q-item clickable v-close-popup class="col-6">
                <q-item-section>Blog</q-item-section>
              </q-item>
            </div>
            <q-separator />
            <div class="text-center">
              <q-btn color="primary" label="Login" no-caps flat @click="onClick" />
            </div>
            <div class="q-ma-sm">
              <q-btn color="primary" class="full-width text-bold" label="Book a Demo" unelevated no-caps @click="onClick" />
              <div class="q-mt-lg text-center">
                <div>
                  <span class="text-secondary">Existing customer?</span>
                  <q-btn color="primary" label="Sign in" no-caps flat @click="onClick" />
                </div>
              </div>
            </div>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar-title>
  </q-toolbar>
</template>

<style scoped>
.shadow{
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
