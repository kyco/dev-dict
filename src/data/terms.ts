import { MISC } from '@/common'
import { interpolateValues } from '@/utils'

import aes from './terms/aes'
import agile from './terms/agile'
import ai from './terms/ai'
import algolia from './terms/algolia'
import alpine_js from './terms/alpine_js'
import android_studio from './terms/android_studio'
import angularjs from './terms/angularjs'
import apache_tomcat from './terms/apache_tomcat'
import asp_net from './terms/asp_net'
import assembly from './terms/assembly'
import aws from './terms/aws'
import azure from './terms/azure'
import azure_pipelines from './terms/azure_pipelines'
import backbone_js from './terms/backbone_js'
import bash from './terms/bash'
import bdd from './terms/bdd'
import beanstalk from './terms/beanstalk'
import big_js from './terms/big_js'
import biome from './terms/biome'
import bitbucket_pipelines from './terms/bitbucket_pipelines'
import bitcoin from './terms/bitcoin'
import blockchain from './terms/blockchain'
import bootstrap from './terms/bootstrap'
import browserify from './terms/browserify'
import browserstack from './terms/browserstack'
import bugzilla from './terms/bugzilla'
import c_sharp from './terms/c_sharp'
import cakephp from './terms/cakephp'
import chart_js from './terms/chart_js'
import ci_cd from './terms/ci_cd'
import circle_ci from './terms/circle_ci'
import claude_code from './terms/claude_code'
import clean_code from './terms/clean_code'
import clojure from './terms/clojure'
import cloudflare from './terms/cloudflare'
import codacy from './terms/codacy'
import codeigniter from './terms/codeigniter'
import confluence from './terms/confluence'
import contentful from './terms/contentful'
import cplusplus from './terms/cplusplus'
import craft_cms from './terms/craft_cms'
import cs_cart from './terms/cs_cart'
import css from './terms/css'
import css_in_js from './terms/css_in_js'
import css_modules from './terms/css_modules'
import cucumber from './terms/cucumber'
import cvs from './terms/cvs'
import cypress from './terms/cypress'
import dart from './terms/dart'
import ddd from './terms/ddd'
import digital_ocean from './terms/digital_ocean'
import docker from './terms/docker'
import docusaurus from './terms/docusaurus'
import dot_net from './terms/dot_net'
import dreamweaver from './terms/dreamweaver'
import dynatrace from './terms/dynatrace'
import e2e from './terms/e2e'
import encryption from './terms/encryption'
import erlang from './terms/erlang'
import es_build from './terms/es_build'
import eslint from './terms/eslint'
import excel from './terms/excel'
import express from './terms/express'
import expression_engine from './terms/expression_engine'
import f_sharp from './terms/f_sharp'
import fhir from './terms/fhir'
import figma from './terms/figma'
import filezilla from './terms/filezilla'
import firebase from './terms/firebase'
import flamelink from './terms/flamelink'
import flutter from './terms/flutter'
import fortran from './terms/fortran'
import foundation from './terms/foundation'
import ftp from './terms/ftp'
import gatsby from './terms/gatsby'
import gcp from './terms/gcp'
import git from './terms/git'
import github from './terms/github'
import github_actions from './terms/github_actions'
import gitlab from './terms/gitlab'
import gitlab_ci from './terms/gitlab_ci'
import golang from './terms/golang'
import google_analytics from './terms/google_analytics'
import google_app_engine from './terms/google_app_engine'
import google_business from './terms/google_business'
import google_maps_api from './terms/google_maps_api'
import graphql from './terms/graphql'
import groovy from './terms/groovy'
import grunt from './terms/grunt'
import gulp from './terms/gulp'
import handlebars from './terms/handlebars'
import handsontable from './terms/handsontable'
import haskell from './terms/haskell'
import hetzner from './terms/hetzner'
import hl7 from './terms/hl7'
import html from './terms/html'
import htmx from './terms/htmx'
import i18n from './terms/i18n'
import ionic from './terms/ionic'
import jasmine from './terms/jasmine'
import java from './terms/java'
import javascript from './terms/javascript'
import jenkins from './terms/jenkins'
import jest from './terms/jest'
import jira from './terms/jira'
import jquery from './terms/jquery'
import js from './terms/js'
import kanban from './terms/kanban'
import karma from './terms/karma'
import kotlin from './terms/kotlin'
import kubernetes from './terms/kubernetes'
import laravel from './terms/laravel'
import legacy_migration from './terms/legacy_migration'
import lexical from './terms/lexical'
import linux from './terms/linux'
import lua from './terms/lua'
import mac_os from './terms/mac_os'
import mail_blaze from './terms/mail_blaze'
import mailchimp from './terms/mailchimp'
import make from './terms/make'
import marionette from './terms/marionette'
import matlab from './terms/matlab'
import maven from './terms/maven'
import meta_mask from './terms/meta_mask'
import microsoft_sql_server from './terms/microsoft_sql_server'
import mongo_db from './terms/mongo_db'
import mui from './terms/mui'
import mysql from './terms/mysql'
import navicat from './terms/navicat'
import nest_js from './terms/nest_js'
import netbeans from './terms/netbeans'
import netlify from './terms/netlify'
import new_relic from './terms/new_relic'
import next_js from './terms/next_js'
import nexudus from './terms/nexudus'
import nft from './terms/nft'
import nginx from './terms/nginx'
import nightsbridge from './terms/nightsbridge'
import node_js from './terms/node_js'
import node_mailer from './terms/node_mailer'
import nosql from './terms/nosql'
import nx from './terms/nx'
import objective_c from './terms/objective_c'
import ocaml from './terms/ocaml'
import okta from './terms/okta'
import open_ai from './terms/open_ai'
import optimizely from './terms/optimizely'
import pathlogix from './terms/pathlogix'
import perl from './terms/perl'
import photoshop from './terms/photoshop'
import php from './terms/php'
import pnpm from './terms/pnpm'
import polyglot_js from './terms/polyglot_js'
import postgres from './terms/postgres'
import posthog from './terms/posthog'
import prettier from './terms/prettier'
import putty from './terms/putty'
import pwa from './terms/pwa'
import python from './terms/python'
import quickbooks from './terms/quickbooks'
import r from './terms/r'
import react from './terms/react'
import react_hook_form from './terms/react_hook_form'
import react_pdf from './terms/react_pdf'
import react_testing_library from './terms/react_testing_library'
import redux from './terms/redux'
import reflow_soldering from './terms/reflow_soldering'
import resend from './terms/resend'
import rest_api from './terms/rest_api'
import rsync from './terms/rsync'
import ruby from './terms/ruby'
import rust from './terms/rust'
import sanity from './terms/sanity'
import sass from './terms/sass'
import scala from './terms/scala'
import scrum from './terms/scrum'
import sendgrid from './terms/sendgrid'
import sentry from './terms/sentry'
import service_workers from './terms/service_workers'
import shadcn from './terms/shadcn'
import smarty from './terms/smarty'
import snyk from './terms/snyk'
import socket_io from './terms/socket_io'
import splunk from './terms/splunk'
import sql from './terms/sql'
import sql_lite from './terms/sql_lite'
import ssh from './terms/ssh'
import storybook from './terms/storybook'
import stripe from './terms/stripe'
import styled_components from './terms/styled_components'
import sublime_text from './terms/sublime_text'
import supabase from './terms/supabase'
import svn from './terms/svn'
import swift from './terms/swift'
import tailwind from './terms/tailwind'
import tanstack from './terms/tanstack'
import tanstack_query from './terms/tanstack_query'
import templ from './terms/templ'
import terraform from './terms/terraform'
import trello from './terms/trello'
import twig from './terms/twig'
import typescript from './terms/typescript'
import typesense from './terms/typesense'
import vercel from './terms/vercel'
import vim from './terms/vim'
import visual_basic from './terms/visual_basic'
import vite from './terms/vite'
import vitest from './terms/vitest'
import vue_js from './terms/vue_js'
import wdio from './terms/wdio'
import web_forms from './terms/web_forms'
import web_workers from './terms/web_workers'
import web3 from './terms/web3'
import webpack from './terms/webpack'
import websockets from './terms/websockets'
import windows from './terms/windows'
import winscp from './terms/winscp'
import wordpress from './terms/wordpress'
import yarn from './terms/yarn'
import zephyr from './terms/zephyr'
import zig from './terms/zig'
import zod from './terms/zod'

export const RAW_TERMS = {
  [aes.id]: aes,
  [agile.id]: agile,
  [ai.id]: ai,
  [algolia.id]: algolia,
  [alpine_js.id]: alpine_js,
  [android_studio.id]: android_studio,
  [assembly.id]: assembly,
  [angularjs.id]: angularjs,
  [apache_tomcat.id]: apache_tomcat,
  [asp_net.id]: asp_net,
  [aws.id]: aws,
  [azure.id]: azure,
  [azure_pipelines.id]: azure_pipelines,
  [backbone_js.id]: backbone_js,
  [bash.id]: bash,
  [bdd.id]: bdd,
  [beanstalk.id]: beanstalk,
  [big_js.id]: big_js,
  [biome.id]: biome,
  [bitbucket_pipelines.id]: bitbucket_pipelines,
  [bitcoin.id]: bitcoin,
  [blockchain.id]: blockchain,
  [bootstrap.id]: bootstrap,
  [browserify.id]: browserify,
  [browserstack.id]: browserstack,
  [bugzilla.id]: bugzilla,
  [c_sharp.id]: c_sharp,
  [cakephp.id]: cakephp,
  [chart_js.id]: chart_js,
  [ci_cd.id]: ci_cd,
  [circle_ci.id]: circle_ci,
  [claude_code.id]: claude_code,
  [clean_code.id]: clean_code,
  [clojure.id]: clojure,
  [cloudflare.id]: cloudflare,
  [codacy.id]: codacy,
  [codeigniter.id]: codeigniter,
  [confluence.id]: confluence,
  [contentful.id]: contentful,
  [cplusplus.id]: cplusplus,
  [craft_cms.id]: craft_cms,
  [cs_cart.id]: cs_cart,
  [css.id]: css,
  [css_in_js.id]: css_in_js,
  [css_modules.id]: css_modules,
  [cucumber.id]: cucumber,
  [cvs.id]: cvs,
  [cypress.id]: cypress,
  [dart.id]: dart,
  [ddd.id]: ddd,
  [digital_ocean.id]: digital_ocean,
  [docker.id]: docker,
  [docusaurus.id]: docusaurus,
  [dot_net.id]: dot_net,
  [dreamweaver.id]: dreamweaver,
  [dynatrace.id]: dynatrace,
  [e2e.id]: e2e,
  [encryption.id]: encryption,
  [erlang.id]: erlang,
  [es_build.id]: es_build,
  [eslint.id]: eslint,
  [excel.id]: excel,
  [express.id]: express,
  [expression_engine.id]: expression_engine,
  [fhir.id]: fhir,
  [figma.id]: figma,
  [filezilla.id]: filezilla,
  [firebase.id]: firebase,
  [flamelink.id]: flamelink,
  [flutter.id]: flutter,
  [fortran.id]: fortran,
  [foundation.id]: foundation,
  [f_sharp.id]: f_sharp,
  [ftp.id]: ftp,
  [gatsby.id]: gatsby,
  [gcp.id]: gcp,
  [git.id]: git,
  [github.id]: github,
  [github_actions.id]: github_actions,
  [gitlab.id]: gitlab,
  [gitlab_ci.id]: gitlab_ci,
  [golang.id]: golang,
  [google_analytics.id]: google_analytics,
  [google_app_engine.id]: google_app_engine,
  [google_business.id]: google_business,
  [google_maps_api.id]: google_maps_api,
  [graphql.id]: graphql,
  [groovy.id]: groovy,
  [grunt.id]: grunt,
  [gulp.id]: gulp,
  [handlebars.id]: handlebars,
  [handsontable.id]: handsontable,
  [haskell.id]: haskell,
  [hetzner.id]: hetzner,
  [hl7.id]: hl7,
  [html.id]: html,
  [htmx.id]: htmx,
  [i18n.id]: i18n,
  [ionic.id]: ionic,
  [jasmine.id]: jasmine,
  [java.id]: java,
  [javascript.id]: javascript,
  [jenkins.id]: jenkins,
  [jest.id]: jest,
  [jira.id]: jira,
  [jquery.id]: jquery,
  [js.id]: js,
  [kanban.id]: kanban,
  [karma.id]: karma,
  [kotlin.id]: kotlin,
  [kubernetes.id]: kubernetes,
  [laravel.id]: laravel,
  [legacy_migration.id]: legacy_migration,
  [lexical.id]: lexical,
  [linux.id]: linux,
  [lua.id]: lua,
  [mac_os.id]: mac_os,
  [mail_blaze.id]: mail_blaze,
  [mailchimp.id]: mailchimp,
  [make.id]: make,
  [marionette.id]: marionette,
  [matlab.id]: matlab,
  [maven.id]: maven,
  [meta_mask.id]: meta_mask,
  [microsoft_sql_server.id]: microsoft_sql_server,
  [mongo_db.id]: mongo_db,
  [mui.id]: mui,
  [mysql.id]: mysql,
  [navicat.id]: navicat,
  [nest_js.id]: nest_js,
  [netbeans.id]: netbeans,
  [netlify.id]: netlify,
  [new_relic.id]: new_relic,
  [next_js.id]: next_js,
  [nexudus.id]: nexudus,
  [nft.id]: nft,
  [nginx.id]: nginx,
  [nightsbridge.id]: nightsbridge,
  [node_js.id]: node_js,
  [node_mailer.id]: node_mailer,
  [nosql.id]: nosql,
  [nx.id]: nx,
  [objective_c.id]: objective_c,
  [ocaml.id]: ocaml,
  [okta.id]: okta,
  [open_ai.id]: open_ai,
  [optimizely.id]: optimizely,
  [pathlogix.id]: pathlogix,
  [perl.id]: perl,
  [photoshop.id]: photoshop,
  [php.id]: php,
  [pnpm.id]: pnpm,
  [polyglot_js.id]: polyglot_js,
  [postgres.id]: postgres,
  [posthog.id]: posthog,
  [prettier.id]: prettier,
  [putty.id]: putty,
  [pwa.id]: pwa,
  [python.id]: python,
  [quickbooks.id]: quickbooks,
  [r.id]: r,
  [react.id]: react,
  [react_hook_form.id]: react_hook_form,
  [react_pdf.id]: react_pdf,
  [react_testing_library.id]: react_testing_library,
  [redux.id]: redux,
  [reflow_soldering.id]: reflow_soldering,
  [resend.id]: resend,
  [rest_api.id]: rest_api,
  [rsync.id]: rsync,
  [ruby.id]: ruby,
  [rust.id]: rust,
  [sanity.id]: sanity,
  [sass.id]: sass,
  [scala.id]: scala,
  [scrum.id]: scrum,
  [sendgrid.id]: sendgrid,
  [sentry.id]: sentry,
  [service_workers.id]: service_workers,
  [shadcn.id]: shadcn,
  [smarty.id]: smarty,
  [snyk.id]: snyk,
  [socket_io.id]: socket_io,
  [splunk.id]: splunk,
  [sql.id]: sql,
  [sql_lite.id]: sql_lite,
  [ssh.id]: ssh,
  [storybook.id]: storybook,
  [stripe.id]: stripe,
  [styled_components.id]: styled_components,
  [sublime_text.id]: sublime_text,
  [supabase.id]: supabase,
  [svn.id]: svn,
  [swift.id]: swift,
  [tailwind.id]: tailwind,
  [tanstack.id]: tanstack,
  [tanstack_query.id]: tanstack_query,
  [templ.id]: templ,
  [terraform.id]: terraform,
  [trello.id]: trello,
  [twig.id]: twig,
  [typescript.id]: typescript,
  [typesense.id]: typesense,
  [vercel.id]: vercel,
  [vim.id]: vim,
  [visual_basic.id]: visual_basic,
  [vite.id]: vite,
  [vitest.id]: vitest,
  [vue_js.id]: vue_js,
  [wdio.id]: wdio,
  [web3.id]: web3,
  [web_forms.id]: web_forms,
  [web_workers.id]: web_workers,
  [webpack.id]: webpack,
  [websockets.id]: websockets,
  [windows.id]: windows,
  [winscp.id]: winscp,
  [wordpress.id]: wordpress,
  [yarn.id]: yarn,
  [zephyr.id]: zephyr,
  [zig.id]: zig,
  [zod.id]: zod,
} as const

export const TERMS = interpolateValues({ obj: RAW_TERMS, keys: MISC.TERM_INTERPOLATION_KEYS, populateEmpty: false })
